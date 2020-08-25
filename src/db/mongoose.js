const mongoose = require("mongoose");
const validator = require("validator")

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(password){
            if(password.includes("password")){
                throw new Error("Passoword cannot contain the word passoword")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0){
                throw new Error("age must be a positive number");
            }
        }
    }
})

const Task = mongoose.model('Tasks', {
    description: { 
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: false
    }
})

// const me = new User({
//    name: "    sara   ",
//    email: "MIKE@MIKE.COM",
//    password: "dj"
// })
// me.save()
// .then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log("Error", error);
// })

const task = new Task({
    description: "Clean my room",
    status: false
})
task.save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log("Error", error)
})