const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

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