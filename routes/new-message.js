const { Router } = require('express');

const messageContoller = require('../controllers/messageController');

newRouter = Router();

newRouter.get('/', messageContoller.createMessageGet);

module.exports = newRouter