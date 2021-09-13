//defining express module
const express=require('express');
//defining path module
const path=require('path').join;
//defining router object
const router=express.Router();

const controller=require('../controller/controllers.js');

router.get('/', controller.home);

router.get('/about', controller.about);

router.get('/blog-fw', controller.blogFw);

router.get('/blog', controller.blog);

router.get('/blog-fw', controller.blogFw);

router.get('/shop-fw', controller.shopFw);

router.get('/product-category', controller.productCategory);

router.get('/my-account', controller.myAccount);

router.get('/faq', controller.faq);

router.get('/contact', controller.contact);

router.get('/compare', controller.compare);

router.get('/checkout', controller.checkout);

router.get('/cat', controller.cat);

router.get('/shopRightSideBar', controller.cat);

router.get('/shop', controller.shop);

router.get('/single-product-extended', controller.singleProductExtended);

router.get('/single-product-sidebar-reviews', controller.singleProductSidebarReviews);

router.get('/single-product-sidebar-accessories', controller.singleProductSidebarAccessories);

router.get('/single-product-sidebar-specification', controller.singleProductSidebarSpecification);

router.get('/wishlist', controller.wishlist);

router.get('/track-your-order', controller.trackYourOrder);

router.get('/single-product-sidebar', controller.singleProductSidebar);

router.get('/terms-and-conditions', controller.termsAndConditions);

router.get('/store-directory', controller.storeDirectory);

router.get('/single-product', controller.singleProduct);




module.exports=router;