const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
    if(err){
        return console.log(err);
    }

    const mydb = db.db('TodoApp');
   /*  mydb.collection('TodoApp').find().toArray().then((err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }) */

    const objectId = require('mongodb').ObjectID;
    mydb.collection('TodoApp').find({_id :  objectId('5c5da4643f52e5c1dfe6da38')}).toArray().then((err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    console.log('Connected to the mongodb server');
});