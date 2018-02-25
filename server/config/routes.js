var controller = require('./../controllers/controller')

module.exports = function(app){
    app.get('/getAll', function(req,res){
        controller.index(req,res)
    })
    app.get('/:id', function(req, res){
        controller.task(req, res)
    })
    app.post('/create', function(req,res){
        controller.create(req,res)
    })
    app.put('/:title', function(req,res){
        controller.update(req,res)
    })
    app.post('/delete', function(req,res){
        console.log('in routes', req.body.id)
        controller.delete(req,res)
    })
}