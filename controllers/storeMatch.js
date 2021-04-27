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
    password: "hayden317",
    host: "smtp.yandex.ru",
    ssl: true,
    port: 465
  });
  console.log('CHECK MAIL')
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
