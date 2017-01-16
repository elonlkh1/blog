'use strict'
const mongoose = require('mongoose');
module.exports = ()=> {
    if (!mongoose.connection.readyState == 1) {

        mongoose.connect(config.mongodb, config.options, function (err) {
            if (err) {
                console.error('connect to mongo server error: ' + config.mongodb + err.message);
                process.exit(1);
            }
        });

        mongoose.Promise = require('q').Promise;

        mongoose.connection.on('disconnected', function (err) {
            console.error('Database disconnected')
            console.info('Exit process')
            process.exit(1)
        });

        mongoose.connection.on('error', function (err) {
            console.error('Database disconnected')
            console.info('Exit process')
            process.exit(1)
        });
    }
    let models = {}
    models.User = mongoose.model('User', require("./user"));
    return models;
}

