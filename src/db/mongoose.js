const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://taskapp:taskapp@cluster0.ky1bn.mongodb.net/task-manager-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})