const mongoose = require('mongoose');
const user = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String}
});

module.exports = mongoose.model('user', user);