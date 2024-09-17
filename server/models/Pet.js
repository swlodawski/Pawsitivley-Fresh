const mongoose = require('mongoose');

const { Schema } = mongoose;


const petSchema = new Schema({
    animal: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true,
        unique: true
    },

    size: {
        type: String,
        required: true
    },

    allergies: {
        type: [String]
    }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
