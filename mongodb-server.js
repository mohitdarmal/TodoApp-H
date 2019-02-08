const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
    if(err){
        return console.log('Unable to connect mongodb server', err);
    }
    
    const mydb = db.db('TodoApp');
    mydb.collection('TodoApp').insertOne({text : 'Something to do', completed : false}, (err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    
    console.log('Connected to the mongodb server!!');
})