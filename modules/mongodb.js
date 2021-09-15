const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/electro";

exports.find = (url = "mongodb://localhost:27017/mydb", findObject = {}) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            else {
                console.log('connected to yhe database successfully !!!')
                const dbo = db.db();
                dbo.collection('product').find(findObject).toArray((err, res) => {
                    if (err) reject(err);
                    else {
                        resolve(res);
                    }
                });
                db.close();
            }
        });
    });
};


// const phone1 = {
//     name: 'galaxy-s10-plus',
//     company: 'Samsung',
//     price: '16,000,000',
//     category: 'smart phones',
//     src: 'galaxy-s10-plus_gallery-color_s10-plus-c1-01.webp',
// };

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     else {
//         console.log('connected to yhe database successfully !!!')
//         const dbo = db.db();
//         dbo.collection('product').insertOne(phone1, (err, res) => {
//             if (err) throw (err);
//             else {
//                 console.log(res);
//             }
//         });
//         db.close();
//     }
// });




//create collection

// dbo.createCollection('product',(err,res)=>{
//     if (err) throw err;
//     console.log("Collection created!");
// });

//insert one object

// const phone1 = {
//     name: 'Xiaomi-Redmi-Note-8',
//     company: 'Xiaomi',
//     price: '9,000,000',
//     category: 'smart phones',
//     src: './assets/images/products/Xiaomi-Redmi-Note-8-6-3-Inch-6GB-128GB-Smartphone-White-876037-.jpg',
// };

// dbo.collection('product').insertOne(phone1, (err, res) => {
//     if (err) throw err;
//     else {
//         console.log(res.ops);
//     }
// });