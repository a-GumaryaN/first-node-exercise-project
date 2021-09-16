//defining express module
const express = require('express');
//defining path module
const path = require('path').join;
//defining router object
const router = express.Router();

const controller = require('../controller/admin');

router.get('/product-pannel', controller.productPannel);

router.post('/add-product', controller.addProduct);

router.get('/get-product', controller.getProduct);