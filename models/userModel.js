const mongoose = require('mongoose');
const siteCommons = require('../utils/sitecommons');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    hall: { type: String, required: true },
    address: { type: String, required: true },
    faculty: { type: String, required: true },
    department: { type: String, required: true },
    level: { type: String, required: true, enum: siteCommons.levels },
    lga: { type: String, required: true, enum: siteCommons.lgas }
});

module.exports = mongoose.model('User', userSchema);