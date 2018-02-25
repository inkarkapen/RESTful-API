var mongoose =require('mongoose')
var Task = mongoose.model('Task')
module.exports = {
    index:function(req,res){
        Task.find({}, function(err, allTasks){
            res.json(allTasks)
        })
    },
    task:function(req, res){
        Task.find({_id: req.params.id}, function(err, foundTask){
            res.json(foundTask)
        })
    },
    
    create:function(req,res){
        console.log(req.body, 'new task in controller')
        Task.create(req.body, function(err, createdTask){
            res.json(createdTask)
            //res.redirect('/')
        })
        
    },
    update:function(req,res){
        var title = req.params.title
        var task = req.body
        Task.findOneAndUpdate(title, task, {}, function(err, updatedTask){
            res.json(updatedTask)
        })
    },
    delete: function(req, res){
        console.log('in controller', req.body.id)
        Task.remove({_id: req.body.id}, function(err, deletedUser){
            res.redirect('/')
        })
    }
}