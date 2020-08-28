const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    surname: String,
    name: String,
    number: String
});

// export model
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact