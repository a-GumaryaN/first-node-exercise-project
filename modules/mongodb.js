const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const fs = require('fs');

mongodb.connect(url, (err, db) => {
    if (err) throw err
    else {
        console.log(`connected to the database successfully !!!`);

        const dbo = db.db('shoping');

        fs.readFileSync('../public/assets/images/galaxy-s10-plus_gallery-color_s10-plus-c1-01.webp', (err, data) => {
            if (err) throw err;
            else {
                dbo.collection('person').insertOne({
                    name: 'image1',
                    data:data
                }, (err, result) => {
                    if (err) throw err
                    else {
                        console.log(result.ops);
                    }
                });
            }
        });


        db.close();
    }
});