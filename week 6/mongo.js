const mongodb = require('mongodb');
const MC = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'SE373'

MC.connect(connectionUrl, {useNewUrlParser:true}, function(error, client)
{
    if(error)
    {
        return console.log('Unable to connect to database!');
    }else{
        return console.log('Now we cookin with gas!');
    }

    const db = client.db(databaseName);

    db.collection('users').insertOne({
        first_name:"Tina",
        last_name:"Ross",
        gender:"female"
    })

})