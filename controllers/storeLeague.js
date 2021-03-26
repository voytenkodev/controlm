const League = require('../models/League')

module.exports = async (req, res) => {
    await League.create(req.body)
    res.redirect('/leagues')
}