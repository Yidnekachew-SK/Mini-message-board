const { Router } = require('express');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.render('index', {title: 'Mini Message Board', messages: messages})
});

indexRouter.post('/new', (req, res) => {
    const textMessage = req.body.textMessage;
    const textUser = req.body.textUser;

    messages.push({text: textMessage, user: textUser, added: new Date()});
    
    res.redirect('/');
});

indexRouter.get('/detail/:index', (req, res) => {
  const messageIndex = Number(req.params.index);
  res.render('details', {message: messages[messageIndex]})
})

module.exports = indexRouter