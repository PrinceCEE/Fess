const mongoose = require('mongoose');
const siteCommons = require('../../utils/sitecommons');

/**
 * @class The connection class
 */
class Connection {

    /**
     * @description The connection to the database
     */
    startConnection() {
    
        mongoose.connect(siteCommons.dbUrl, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
        .then(resp => {
            console.log(`The app has successfully connected to the database:\nName: ${resp.connections[0].name}\nUser: ${resp.connections[0].user}\nHost: ${resp.connections[0].host}`);
        })
        .catch(err => {
            console.error(err);
        });

        mongoose.Promise = global.Promise; 
    }
}

module.exports = new Connection();