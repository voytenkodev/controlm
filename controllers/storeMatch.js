const SMTPClient = require('emailjs');

const MatchPost = require("../models/MatchPost");

module.exports = async (req, res) => {
  await MatchPost.create({
    ...req.body,
    userid: req.session.userId,
  });
  console.log('add match')
  const client = new SMTPClient({
    user: "rugby@signal-tv.com",
    password: "ytcemzrcsqmrdhim",
    host: "smtp.yandex.ru",
    port: 465
  });
  alert('OK')
  client.send(
    {
      text: "Add match",
      from: "rugby@signal-tv.com",
      to: "voytenkodev@yandex.ru",
      subject: "test",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
  res.redirect("/matches");
};
