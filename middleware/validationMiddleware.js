module.exports = (req,res,next)=>{
    if(req.body.date == null || req.body.team_1 == null || req.body.city == null){
        return res.redirect('/match/new')
    }
    next()
}