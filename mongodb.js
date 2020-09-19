const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const ConnectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(ConnectionURL, { useNewUrlParser: true }, (error, client) =>{
    if(error) {
        return console.log('Unable to connect to Database')
    }
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name:'Lartum',
    //     age: 21
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Complete the Course',
    //         Completed: false
    //     },
    //     {
    //         description: 'Reset your Time Table',
    //         Completed: false
    //     },  
    //     {
    //         description: 'Chnage the turtles water',
    //         Completed: true
    //     }
    // ], (error, result ) =>{
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(result.ops)
    // })
    
    db.collection('users').insertMany([
        {
            name:'Lartum Raksap',
            age: 21,
            email:'lraksap11@gmail.com',
            password:'Helloosw23'
        },
        {
            name:'Jon Doe',
            age: 28,
            email:'jondoe@email.com',
            password:'seedasdas21'
        },
        {
            name:'Naomi Smith',
            age: 32,
            email:'nsmithe@supermail.com',
            password:'hhshhudwqwo23'
        },
        {
            name:'Samuel Campbell',
            age: 25,
            email:'smuelcampell@nicemail.com',
            password:'samuelscampell23'
        }
    ], (error, result) =>{
            if(error){
                console.log('Unable to connect to the database ', error )
            }
            console.log(result.ops);
    })

    // db.collection('tasks').findOne({ _id: new
    //     ObjectID("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
    //     console.log(task)
    //     })

    // db.collection('tasks').findOne({_id: new mongodb.ObjectID("5ee740d99cd3de261845bd0d")}, (error, task) =>{
    //     if(error){
    //         console.log(error)
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({Completed:false}).toArray((error, result) =>{
    //     if(error){
    //         console.log(error)
    //     }
    //    else if(result.length === 0 || null){
    //         console.log('The result for the query doesnt exist')
    //     }
    //     else{
    //         console.log(result)
    //     }
       
    // })

    // db.collection('tasks')
    //  .updateMany({ Completed: true }, 
    //     { $set : { 
    //         Completed : false }
    //     }).then((result) =>{
    //         console.log(result)
    //     }).catch((error) =>{
    //         console.log(error);
    //     })

    // db.collection('tasks').deleteOne({
    //     _id: new mongodb.ObjectID("5ee740d99cd3de261845bd0b")
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error);
    // })    
})