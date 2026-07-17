const db = require("../db/queries");

const { body, validationResult, matchedData } = require("express-validator");

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', {title: 'Mini Message Board', messages: messages})
}

async function getMessageDetail(req, res) {
    const id = req.params.id;
    const message = await db.getMessageById(id);
    res.render('details', {message});
}

async function createMessageGet(req, res) {
  res.render('form');
}

const validateUser = [
  body("textUser").trim()
    .isLength({ max: 50}).withMessage(`Name should not exceed 50 characters!`),
  body("textMessage").trim()
    .isAlphanumeric('en-US', { ignore: ' ' }).withMessage(`Message must only contain letters.`)
    .isLength({ max: 200 }).withMessage(`Message cannot exceed 200 characters.`),
];

createMessagePost = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }

    const { textUser, textMessage } = matchedData(req);
    await db.insertMessage(textUser, textMessage, new Date());
    res.redirect("/");
  }
]

module.exports = {
  getMessages,
  getMessageDetail,
  createMessageGet,
  createMessagePost
};