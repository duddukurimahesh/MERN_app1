
const mongoose = require('mongoose');

const freelancer = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobileNum: { type: String, required: true },
    skills: { type: String, required: true }

})

module.exports = mongoose.model('freelancer', freelancer);
