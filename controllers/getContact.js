const Contact = require('../models/Contact.js')

module.exports = async(req, res) => {
    const contact = await (await Contact.findById(req.params.id));
    res.render('contact', {
        contact
    })
}