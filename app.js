
const express = require('express')
const app = express()
const port = 3000
const cupcakes = require('./data/cupcakes')

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    cupcakes: cupcakes
  })
})

app.get('/cupcakes/:poop', (req, res) => {
  const id = req.params.poop
  res.send(id)
})

app.listen(port, (req, res) => {
  console.log('listening on port', port)
})
