const path = require('path');
const express = require('express');
const {MongoClient} = require('mongodb');
const assert = require('assert');
const mongoose = require('mongoose');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;//required to run on heroku



app.use(express.static(publicPath));

app.get('*',(req, res)=> {
    res.sendFile(path.join(publicPath,'index.html'));
});

//DB config
const url = require('./config/mlab').mongoURI;
const dbName = require('./config/mlab').db;

//connect to mongo
//with mongoClient

MongoClient.connect(url,{ useNewUrlParser: true } , (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
    
    db.collection('Users').insertOne({
        email: 'rene@test.com',
        name: 'rene'
    }, (err, result) =>{
        if (err) {
            return console.log('unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
  });
 
//with mongoose
//   mongoose.connect(url , { useNewUrlParser: true }).then(
//   (res) => {
//    console.log("Connected to Database Successfully.")
//   }
// ).catch((err) => {
//   console.log("Connection to database failed.", err);
// });


//start server
app.listen(port, ()=> {
    console.log('Server is up!');
});