const Contact = require('../models/Contact.js')

module.exports = async (req, res) => {
    const contacts = await Contact.find({});
    res.render('contacts',{
        contacts
    });
}