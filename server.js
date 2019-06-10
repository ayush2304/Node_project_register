const express = require('express')
const bodyParser= require('body-parser')

//app.use(bodyParser.urlencoded({extended: true}))
const app = express();
const routes = require('./api/routes.js');

const DatabaseSystem = require('./api/registration/parents_db.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes);

DatabaseSystem.SetupSQLDatabase();
// connection configurations


//ROUTES WILL GO HERE

app.listen(3000, () => console.log('Server started on port 3000'));







 


