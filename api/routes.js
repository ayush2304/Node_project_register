const routes = require('express').Router();
const parents = require ('./registration/parent_routes');
const bodyParser= require('body-parser')
const multer = require('multer');

routes.get('/home', function(req, res) {
  //  res.json({ message: 'WELCOME' });
res.sendFile(__dirname + '/public/index.html');
    
});

routes.use('/parents', parents);





module.exports = routes;
