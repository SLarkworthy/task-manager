const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017" 
const databaseName = "task-manager"


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);
    
    // db.collection('users').findOne({ age: 10 }, (error, user) => {
    //     if (error) {
    //         return console.log("unable to fetch")
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5f43f79800a8310e33f02b45') }, (error, task) => {
    //     if (error) {
    //         return console.log("unable to fetch")
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ status: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    db.collection('tasks').updateMany({ status: false }, { 
        $set: {status: true} 
    })
    .then(task => console.log(task))
    .catch(error => console.log(error))
})

