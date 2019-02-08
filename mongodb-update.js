const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", {
    useNewUrlParser: true
}, (err, db) => {
    if (err) {
        return console.log(err);
    }

    const mydb = db.db('TodoApp');
    mydb.collection('TodoApp').findOneAndUpdate({completed : false}, {$set : {completed : true}}).then((err, result) => {
        if(err){
             return console.log(err);
        }
        console.log(result);
    })

    console.log('Connected to the mongodb server');
});