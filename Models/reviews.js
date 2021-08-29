
const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({

    rating: { type: String, require: true },
    comments: {type: String, required: true},
    workProvider: {type: String, required: true},
    freelancer: {type: String, required: true}
});

module.exports = mongoose.model("review", reviewsSchema);