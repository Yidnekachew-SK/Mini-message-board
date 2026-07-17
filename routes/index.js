const { Router } = require('express');
const messageContoller = require('../controllers/messageController');

indexRouter = Router();

indexRouter.get('/', messageContoller.getMessages);

indexRouter.post('/new', messageContoller.createMessagePost);

indexRouter.get('/detail/:id', messageContoller.getMessageDetail);

module.exports = indexRouter