const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/electro";

//declare a alias for console.log

const log = console.log;

//define a functio for chack input array objects properties content
//function returned true when all input object's has all of the require properties value

const checkArrayProduct = (input) => {
    for (var i of input) {
        if ((i.name === undefined) | (i.src === undefined) | (i.price === undefined) | (i.category === undefined) | (i.company === undefined)) return true;
    }
    return false;
}

//define a function to find many values in database

exports.find = (url = "mongodb://localhost:27017/mydb", collection, findObject = {}) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) return reject(`has error in connecting to database => &{err}`);
            else {
                console.log('connected to the database successfully !!!');
                const dbo = db.db();
                dbo.collection(collection).find(findObject).toArray((err, res) => {
                    if (err) return reject(`has error in find procces in database module => &{err}`);
                    else {
                        resolve(res);
                    }
                });
                db.close();
            }
        });
    });
};

//define a function to find many values in database

exports.delete = (url = "mongodb://localhost:27017/mydb", collection, deleteQuery) => {
    return new Promise((resolve, reject) => {
        if (deleteQuery === undefined) return reject(`error in delete methode in database => deleteObject must have a value...`);
        MongoClient.connect(url, function (err, db) {
            if (err) return reject(`has error in connecting to database => &{err}`);
            else {
                console.log('connected to the database successfully !!!');
                const dbo = db.db();
                dbo.collection(collection).deleteMany(deleteQuery, (err, res) => {
                    if (err) return reject(`has error in find procces in database module => &{err}`);
                    else {
                        resolve(res);
                    }
                });
                db.close();
            }
        });
    });
};

//define a function to find many values in database

exports.update = (url = "mongodb://localhost:27017/mydb", collection, updateQuery, newRecord) => {
    return new Promise((resolve, reject) => {
        if (updateQuery === undefined) return reject(`error in delete methode in database => updateQuery must have a value...`);
        if (newRecord === undefined) return reject(`error in delete methode in database => newRecord must have a value...`);
        MongoClient.connect(url, function (err, db) {
            if (err) return reject(`has error in connecting to database => &{err}`);
            else {
                console.log('connected to the database successfully !!!');
                const dbo = db.db();
                dbo.collection(collection).updateMany(updateQuery,newRecord, (err, res) => {
                    if (err) return reject(`has error in find procces in database module => &{err}`);
                    else {
                        resolve(res);
                    }
                });
                db.close();
            }
        });
    });
};


//define a function to insert many value's in database

exports.insert = (url = "mongodb://localhost:27017/mydb", collection = 'users', product = []) => {
    return new Promise((resolve, reject) => {
        if (checkArrayProduct(product))return reject('input product not complete...');
        MongoClient.connect(url, function (err, db) {
            if (err) return reject(`has error in connecting to database module => &{err}`);
            else {
                console.log('connected to yhe database successfully !!!')
                const dbo = db.db();
                dbo.collection(collection).insertMany(product, (result) => {
                    db.close();
                    resolve(result);
                });
                
            }
        });
    });
};