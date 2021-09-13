//defining path module
const path = require('path').join;
//define about page methode
exports.about=(req,res)=>{
res.render(path(__dirname,'../public','about.ejs'));
}
//define blog-fw page methode
exports.blogFw = (req, res) => {
res.render(path(__dirname, '../public', 'blog-fw.ejs'));
}
//define shop-fw page methode
exports.shopFw = (req, res) => {
res.render(path(__dirname, '../public', 'shop-fw.ejs'));
}
//define product-category page methode
exports.productCategory = (req, res) => {
res.render(path(__dirname, '../public', 'product-category.ejs'));
}
//define my-account page methode
exports.myAccount = (req, res) => {
res.render(path(__dirname, '../public', 'my-account.ejs'));
}
//define my-account page methode
exports.home = (req, res) => {
res.render(path(__dirname, '../public', 'home-v2.ejs'));
}
//define faq page methode
exports.faq = (req, res) => {
res.render(path(__dirname, '../public', 'faq.ejs'));
}
//define contact page methode
exports.contact = (req, res) => {
res.render(path(__dirname, '../public', 'contact.ejs'));
}
//define compare page methode
exports.compare = (req, res) => {
res.render(path(__dirname, '../public', 'compare.ejs'));
}
//define compare page methode
exports.blog = (req, res) => {
res.render(path(__dirname, '../public', 'blog.ejs'));
}
//define checkout page methode
exports.checkout = (req, res) => {
res.render(path(__dirname, '../public', 'checkout.ejs'));
}
//define cat page methode
exports.cat = (req, res) => {
res.render(path(__dirname, '../public', 'cat.ejs'));
}
//define shop-right-side-bar page methode
exports.shopRightSideBar = (req, res) => {
res.render(path(__dirname, '../public', 'shopRightSideBar.ejs'));
}
//define shop page methode
exports.shop = (req, res) => {
res.render(path(__dirname, '../public', 'shop.ejs'));
}
//define single-product-extended page methode
exports.singleProductExtended = (req, res) => {
res.render(path(__dirname, '../public', 'single-product-extended.ejs'));
}
//define single-product-extended page methode
exports.singleProductSidebarAccessories = (req, res) => {
res.render(path(__dirname, '../public', 'single-product-sidebar-accessories.ejs'));
}
//define single-product-extended page methode
exports.singleProductSidebarReviews = (req, res) => {
res.render(path(__dirname, '../public', 'single-product-sidebar-reviews.ejs'));
}
//define single-product-extended page methode
exports.singleProductSidebarSpecification = (req, res) => {
res.render(path(__dirname, '../public', 'single-product-sidebar-specification.ejs'));
}
//define single-product-extended page methode
exports.wishlist = (req, res) => {
res.render(path(__dirname, '../public', 'wishlist.ejs'));
}
//define single-product-extended page methode
exports.trackYourOrder = (req, res) => {
res.render(path(__dirname, '../public', 'track-your-order.ejs'));
}
//define single-product-extended page methode
exports.singleProductSidebar = (req, res) => {
res.render(path(__dirname, '../public', 'single-product-sidebar.ejs'));
}
//define single-product-extended page methode
exports.termsAndConditions = (req, res) => {
res.render(path(__dirname, '../public', 'terms-and-conditions.ejs'));
}
//define store-directory page methode
exports.storeDirectory = (req, res) => {
res.render(path(__dirname, '../public', 'store-directory.ejs'));
}
//define store-directory page methode
exports.storeDirectory = (req, res) => {
res.render(path(__dirname, '../public', 'store-directory.ejs'));
}
//define store-directory page methode
exports.singleProduct = (req, res) => {
res.render(path(__dirname, '../public', 'single-product.ejs'));
}