const Leagues = require('../models/League.js');

module.exports = async(req, res) => {
    const leagues = await Leagues.find({});
    res.render('leagues', {
        leagues
    });
}