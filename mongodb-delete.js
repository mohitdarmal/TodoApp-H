const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, db) => {
    if (err) {
        return console.log(err);
    }

    const mydb = db.db('TodoApp');

    /* --------------------------------deleteMany--------------------------------- */
    /* mydb.collection('TodoApp').deleteMany({text : 'Eat Lunch'}).then((err, result) => {
        if(err){
            return console.log(err);
        }
        console.log(result);
    }); */




    /* --------------------------------deleteOne--------------------------------- */
    /*   mydb.collection('TodoApp').deleteOne({text : "Eat Lunch"}).then((err, result) => {
          if(err){
              return console.log(err);
          }
          console.log(result);
      }); */



    /* --------------------------------deleteOne--------------------------------- */
    /*   mydb.collection('TodoApp').findOneAndDelete({text : "Eat Lunch"}).then((err, result) =>{
          if(err){
              return console.log(err);
          }
          console.log(result);
      }) */


    /* --------------------------------Item delete by id--------------------------------- */  
    const objectId = require('mongodb').ObjectID;
        mydb.collection('TodoApp').findOneAndDelete({_id : objectId("5c5daa753f52e5c1dfe6dbb9")}).then((err, result) => {
            if(err){
                return console.log(err);
            }
            console.log(result);
        });

    console.log("Connected to the mongodb server");
});