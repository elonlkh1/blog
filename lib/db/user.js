'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true, index: true},
    password: {type: String, required: true},
    avatar: {type: String},
    gender: {type: String},
    bio: {type: String},
    create_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
});

module.exports = UserSchema;
