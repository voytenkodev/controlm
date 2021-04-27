const { SMTPClient } = require('emailjs');

const MatchPost = require("../models/MatchPost");

module.exports = async (req, res) => {
  await MatchPost.create({
    ...req.body,
    userid: req.session.userId,
  });
  console.log()
  const client = new SMTPClient({
    user: "voytenkodev",
    password: "ccpvkzpmbhzzoaac",
    host: "smtp.yandex.ru",
    ssl: true,
  });

  client.send(
    {
      text: `Добавили новый матч. Подробности: http://95.165.12.191/matches`,
      from: "voytenkodev@yandex.ru",
      to: "voytenkodev@gmail.com",
      subject: "Новый матч",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
  res.redirect("/matches");
};
