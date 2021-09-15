//declare express module
const express = require('express');
//declare app variable from express methode
const app = express();
//declare http module
const http = require('http');
//declare path module
const path=require('path').join;
//declare port
const port =process.env.port || 3000;
//declare server object to run server
const server = http.Server(app);
//declare console.log abbreviation
const log=console.log;
//declare mongodb module
const MongoClient = require('mongodb').MongoClient;
//declare mongodb url
const url = "mongodb://localhost:27017/electro";
//declare bodyparser module
const bodyParser = require('body-parser');
//define bodyParser for app
app.use(bodyParser.urlencoded({extended:false}));
//define public folder for express
app.use(express.static(path('./public')));
//deining router module
const router=require('./routes/routes');
//declare routes object for app
app.use(router);
//declare ejs as view engine
app.set({
    'view engine': 'ejs'
});
//set public golder as default views folder
app.set({
    'views': ''
})
//add 404 page
app.use('', (req, res) => {
    res.render(path(__dirname,'public/404.ejs'));
});




server.listen(port, (err) => {
    if (err) throw err;
    else {
        log(`server is running on port ${port}`);
    }
});