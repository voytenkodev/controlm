const { SMTPClient } = require('emailjs');

const MatchPost = require("../models/MatchPost");

module.exports = async (req, res) => {
  await MatchPost.create({
    ...req.body,
    userid: req.session.userId,
  });
  console.log('MATCH ADD')
  const client = new SMTPClient({
    user: "voytenkodev",
    password: "ccpvkzpmbhzzoaac",
    host: "smtp.yandex.ru",
    ssl: true,
  });

  console.log('mail check')
  client.send(
    {
      text: `Добавили новый матч. Подробности: ${req.body}`,
      from: "voytenkodev@yandex.ru",
      to: "voytenkodev@gmail.com",
      subject: "Новый матч",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
  console.log('email send')
  res.redirect("/matches");
};
