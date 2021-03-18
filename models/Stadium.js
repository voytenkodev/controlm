const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
    name: String,
    city: String,
    address: String,
    contact: {
        type: mongoose.Schema.Types.String,
        ref: 'Contact',
        required: true
    },
    photo: String,
    ethernet: String,
    comment: String,
});

const Stadium = mongoose.model('Stadium', stadiumSchema);

module.exports = Stadium