require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5f455e05d0580f13f09a8b97', { age: 1 })
.then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 }) 
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e)
})



