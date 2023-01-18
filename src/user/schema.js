const mongoose = require('mongoose');
const schema = mongoose.Schema;

    let user = new schema({
        firstname: { type: String },
        lastname: { type: String }
    });
    module.exports = mongoose.model('users', user);