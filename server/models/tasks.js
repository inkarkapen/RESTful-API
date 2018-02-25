var mongoose = require('mongoose')
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ''},
    completed: {type: String, default: false}
})
mongoose.model("Task", TaskSchema)