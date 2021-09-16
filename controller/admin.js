const db = require("../modules/mongodb");
const url = "mongodb://localhost:27017/electro";
const log = console.log;
//defining path module
const path = require('path').join;
//define product-pannel methode
exports.productPannel = (req, res) => {
    res.render(path(__dirname, '../public/views', 'add-product.ejs'));
}
//define product-pannel methode
exports.addProduct = (req, res) => {
    res.send(req.body);
}
//define faq add-product methode
exports.getProduct = (req, res) => {
    log('pass');
    db.find(url, 'product', req.query).then((result) => {

        res.send(result);
    });
}