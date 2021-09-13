//defining express module
const express = require('express');
//defining app variable from express methode
const app = express();
//defining http module
const http = require('http');
//defining path module
const path=require('path').join;
//defining port
const port =process.env.port || 3000;
//defining server object to run server
const server = http.Server(app);
//defining console.log abbreviation
const log=console.log;
//defining bodyparser module
const bodyParser = require('body-parser');
//define bodyParser for app
app.use(bodyParser.urlencoded({extended:false}));
//define public folder for express
app.use(express.static(path('./public')));
//deining router module
const router=require('./routes/routes');
//defining routes object for app
app.use(router);
//defining ejs as view engine
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