const League = require('../models/League')
const MatchPost = require('../models/MatchPost')

module.exports = async(req, res) => {
    const matches = await (await MatchPost.find({}));
    console.log(req.params)
    const league = await (await MatchPost.aggregate([
        { $match: {name: matches.league}},
        { $project: {_id: 1}}   
    ]))

    const matchesinleague = await (await MatchPost.aggregate([
        { $match: {name: matches.league}},
        { $project: {name: 1}}
    ]))[0]

    res.render('league', {
        matchesinleague
    });
}