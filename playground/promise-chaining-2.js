require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5f50f9db7a5b47239a2612d2')
// .then((task) => {
//     console.log(task)
//     return Task.countDocuments({ status: false }) 
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ status: false })
    return count;
}

deleteTaskAndCount('5f456065ecdfb0140316c90a')
.then(count => console.log(count))
.catch(e => console.log(e))