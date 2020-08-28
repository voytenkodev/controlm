const Stadium = require('../models/Stadium')

module.exports = async (req, res) => {
    await Stadium.create(req.body)
    res.redirect('/stadiums')
}