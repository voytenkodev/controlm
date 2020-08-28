const Contact = require('../models/Contact')

module.exports = async (req, res) => {
    await Contact.create(req.body)
    res.redirect('/contacts')
}