const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next() //must call this when the middleware function is done
//     }
// })

//maintenance mode
// app.use((req, res, next) => {
//     res.status(503).send('Site in maintenance, try again later');
// })

app.use(express.json()) //parses incoming json to an object
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port);
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'dummy123' }, 'thisismynewcourse', { expiresIn: '7 days' });
    console.log(token);

    const data = jwt.verify(token, 'thisismynewcourse');
    console.log(data);
}

myFunction();

const main = async () => {
    // const task = await Task.findById('5f66609ef2655b2ae4921ecf');
    // await task.populate('owner').execPopulate();//finds the user and makes task.owner the entire owner
    // console.log(task);


}
main();
