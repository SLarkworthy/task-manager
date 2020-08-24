const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017" 
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: "Sarah",
    //     age: 25
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert user")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Tom",
    //         age: 30
    //     }, {
    //         name: "Kevin",
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert documents")
    //     }
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: "walk dog",
            status: false
        }, {
            description: "call John",
            status: true
        }, {
            description: "meeting with board",
            status: false
        }
    ], (error, result) => {
        if (error) {
            return console.log("Unable to insert documents");
        }
        console.log(result.ops)
    })
})

