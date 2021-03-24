const MatchPost = require('../models/MatchPost.js')

module.exports = async(req, res) => {
    const matchposts = await MatchPost.find({}).populate('userid').sort({"date" : -1});
    var date = new Date()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()
    var currentdate = day + '.' + month + '.' +  year
    console.log(matchposts)
    res.render('matches',{
        matchposts, currentdate
    });
}