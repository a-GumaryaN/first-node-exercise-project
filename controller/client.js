const db = require("../modules/mongodb");
const url = "mongodb://localhost:27017/electro";
const log = console.log;
//defining path module
const path = require('path').join;
//define about page methode
exports.about = (req, res) => {
    res.render(path(__dirname, '../public/views', 'about.ejs'));
}
//define blog-fw page methode
exports.blogFw = (req, res) => {
    res.render(path(__dirname, '../public/views', 'blog-fw.ejs'));
}
//define shop-fw page methode
exports.shopFw = (req, res) => {
    res.render(path(__dirname, '../public/views', 'shop-fw.ejs'));
}
//define product-category page methode
exports.productCategory = (req, res) => {
    res.render(path(__dirname, '../public/views', 'product-category.ejs'));
}







//define my-account page methode
exports.myAccount = (req, res) => {
    res.render(path(__dirname, '../public/views', 'my-account.ejs'));
}


//define my-account page methode
exports.clientLogin = (req, res) => {
    db.find(url, 'users', {
        email: req.username
    }).then((result) => {
        if (result !== []) {
            res.send();
        } else {
            res.send();
        }
    });
}

//define my-account page methode
exports.clientRegister = (req, res) => {
    db.find(url, 'users', {
        email: req.username
    }).then((result) => {
        if (result === []) {
            const newPerson = {
                email: req.body.email,
                password: req.body.password
            }

            db.insert(url, 'users', [newPerson]).then((result) => {
                if (result.ops.ok === 1) {
                    db.find(url, 'product').then((result) => {
                        res.render(path(__dirname, '../public/views', 'home-v3-full-color.ejs'), {
                            productBaner: result,
                            registerStatus: true,
                            registerResult: "registered successfully..."
                        });
                    });
                } else {
                    db.find(url, 'product').then((result) => {
                        res.render(path(__dirname, '../public/views', 'home-v3-full-color.ejs'), {
                            productBaner: result,
                            registerStatus: false,
                            registerResult: "failed in database..."
                        });
                    });
                }

            });



        } else {
            db.find(url, 'product').then((result) => {
                res.render(path(__dirname, '../public/views', 'home-v3-full-color.ejs'), {
                    productBaner: result,
                    registerStatus: false,
                    registerResult: "user with this email registered before..."
                });
            });
        }


    });
}










//define home page methode
exports.home = (req, res) => {

    db.find(url, 'product', {

        type: "simpleImage"

    }).then((result1) => {


        db.find(url, 'product', {

            type: "headerBannerImage"

        }).then((result2) => {


            res.render(path(__dirname, '../public/views', 'home.ejs'), {
                productBaner: result1,
                headerItems: result2
            });


        });


    });

};





//define faq page methode
exports.faq = (req, res) => {
    res.render(path(__dirname, '../public/views', 'faq.ejs'));
}
//define contact page methode
exports.contact = (req, res) => {
    res.render(path(__dirname, '../public/views', 'contact.ejs'));
}
//define compare page methode
exports.compare = (req, res) => {
    res.render(path(__dirname, '../public/views', 'compare.ejs'));
}
//define compare page methode
exports.blog = (req, res) => {
    res.render(path(__dirname, '../public/views', 'blog.ejs'));
}
//define checkout page methode
exports.checkout = (req, res) => {
    res.render(path(__dirname, '../public/views', 'checkout.ejs'));
}
//define cat page methode
exports.cat = (req, res) => {
    res.render(path(__dirname, '../public/views', 'cat.ejs'));
}
//define shop-right-side-bar page methode
exports.shopRightSideBar = (req, res) => {
    res.render(path(__dirname, '../public/views', 'shopRightSideBar.ejs'));
}
//define shop page methode
exports.shop = (req, res) => {
    res.render(path(__dirname, '../public/views', 'shop.ejs'));
}
//define single-product-extended page methode
exports.singleProductExtended = (req, res) => {
    res.render(path(__dirname, '../public/views', 'single-product-extended.ejs'));
}
//define single-product-extended page methode
exports.singleProductSidebarAccessories = (req, res) => {
    res.render(path(__dirname, '../public/views', 'single-product-sidebar-accessories.ejs'));
}
//define single-product-extended page methode
exports.singleProductSidebarReviews = (req, res) => {
    res.render(path(__dirname, '../public/views', 'single-product-sidebar-reviews.ejs'));
}
//define single-product-extended page methode
exports.singleProductSidebarSpecification = (req, res) => {
    res.render(path(__dirname, '../public/views', 'single-product-sidebar-specification.ejs'));
}
//define single-product-extended page methode




exports.wishlist = (req, res) => {
    res.render(path(__dirname, '../public/views', 'wishlist.ejs'), {
        headerImage: "",
        product: products
    });
}






//define single-product-extended page methode
exports.trackYourOrder = (req, res) => {
    res.render(path(__dirname, '../public/views', 'track-your-order.ejs'));
}
//define single-product-extended page methode
exports.singleProductSidebar = (req, res) => {
    res.render(path(__dirname, '../public/views', 'single-product-sidebar.ejs'));
}
//define single-product-extended page methode
exports.termsAndConditions = (req, res) => {
    res.render(path(__dirname, '../public/views', 'terms-and-conditions.ejs'));
}
//define store-directory page methode
exports.storeDirectory = (req, res) => {
    res.render(path(__dirname, '../public/views', 'store-directory.ejs'));
}
//define store-directory page methode
exports.storeDirectory = (req, res) => {
    res.render(path(__dirname, '../public/views', 'store-directory.ejs'));
}
//define store-directory page methode
exports.singleProduct = (req, res) => {
    res.render(path(__dirname, '../public/views', 'single-product.ejs'));
}