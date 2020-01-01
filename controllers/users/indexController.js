const siteCommons = require('../../utils/sitecommons');

exports.indexGet = (req, res, next) => {
    res.render('users/index', {
        title: `Welcome to the Federation of Ebonyi State Students`
    });
};