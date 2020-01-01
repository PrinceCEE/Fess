const Users = require('../../models/userModel');

class User {
    
    async getUserByEmail(email) {
        const user = await Users.findOne({ email: email });
        return user;
    }

    async getUserByNumber(number) {
        const user = await Users.findOne({ phoneNumber: number });
        return user;
    }

}

module.exports = new User();