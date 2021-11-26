const express = require('express') 
        const app = express() 

        const error = (status, msg) => {
          const err = new Error(msg) 
          err.status = status 
          return err 
        }

        const guidGenerator = () => {
          const S4 = () => {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1) 
          }
          return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()) 
        }

        app.use(express.static('public')) 

        app.use('/api', function(req, res, next){
          const key = req.query['api-key'] 

          // Key is missing
          if (!key) {
            return next(error(400, 'api key required')) 
          }
          // Key is invalid
          if (!~apiKeys.indexOf(key)) {
            return next(error(401, 'invalid api key')) 
          }

          req.key = key 
          next() 
        })

        //  Accept JSON data
        app.use(express.json()) 

        //  valid api keys
        const apiKeys = ['wbeweb', 'c4game'] 

        //  in-memory DB
        const data = {} 

        app.get('/api/data/:id', function(req, res, next) {
          const id = req.params.id 
          const result = data[id] 

          if (result) res.send(result) 
          else next() 
        }) 

        app.post('/api/data', function (req, res, next) {
          const id = guidGenerator() 
          data[id] = req.body 
          res.send({id}) 
        }) 

        app.delete('/api/data/:id', function(req, res, next) {
          const id = req.params.id 
          delete data[id] 
          res.sendStatus(204) 
        }) 

        app.put('/api/data/:id', function(req, res, next) {
          const id = req.params.id 

          if (data[id]) {
            data[id] = req.body 
            res.send(req.body) 
          }
          else next() 
        }) 

        app.use(function(err, req, res, next) {
          res.status(err.status || 500) 
          res.send({ error: err.message }) 
        }) 

        app.use(function(req, res) {
          res.status(404) 
          res.send({ error: "not found" }) 
        })

        app.listen(3000) 
        console.log('Express started on port 3000') 