require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5f50f9db7a5b47239a2612d2')
.then((task) => {
    console.log(task)
    return Task.countDocuments({ status: false }) 
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e)
})
