const { Router } = require('express');

newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render('form')
});

module.exports = newRouter