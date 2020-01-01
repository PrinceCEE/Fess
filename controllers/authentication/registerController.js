const siteCommons = require('../../utils/sitecommons');
const Users = require('../../models/dbhelpers/users');
const userModel = require('../../models/userModel');

// GET register page
exports.registerGet = (req, res, next) => {
    res.render('users/register', {
        title: `Fill the FESS form`,
        lgas: siteCommons.lgas,
        levels: siteCommons.levels
    });
};

// POST register page
exports.registerPost = async (req, res, next) => {
    
    // no two persons will have the same phone number and email
    let user = await Users.getUserByEmail(req.body.email);
    if(!user) {

        let user = await Users.getUserByNumber(req.body.phoneNumber);
        if(!user) {
            
            // create a new user and save to the db
            let options = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                middleName: req.body.middleName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email.toLowerCase(),
                whatsappNumber: req.body.whatsapp,
                hall: req.body.hall,
                address: req.body.address,
                faculty: req.body.faculty,
                department: req.body.department,
                level: req.body.level,
                lga: req.body.lga
            };
            
            const newUser = new userModel(options);

            newUser.save(err => {

                if(err) {
                    return next(err);
                }
                
                res.render('users/register', {
                    title: `Fill the FESS form`,
                    lgas: siteCommons.lgas,
                    levels: siteCommons.levels,
                    success: `Form successfully submitted, thanks`
                });

            });
        } else {
            res.render('users/register', {
                title: `Fill the FESS form`,
                lgas: siteCommons.lgas,
                levels: siteCommons.levels,
                error: `The phone number is already registered`
            });
        }

    } else {
        res.render('users/register', {
            title: `Fill the FESS form`,
            lgas: siteCommons.lgas,
            levels: siteCommons.levels,
            error: `The email is already registered`
        });
    }
};

// GET fess_members
exports.fess_membersGet = (req, res, next) => {

    userModel.find({}).exec((err, members) => {
        if(err) return next(err);
        res.render('users/fess_members', {
            title: 'Members Collection',
            members: members
        });
    })
    
};