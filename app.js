
const express = require('express')
const port = 3000
const cupcakes = require('./data/cupcakes')
const query = require('./data/queries')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index', {
    cupcakes: cupcakes
  })
})

app.get('/cupcakes/:id', (req, res) => {
  const id = req.params.id
  const cupcake = query.cupcake(id)
  res.render('cupcake', {
    cupcake: cupcake
  })
})

app.post('/cupcakes/ratings/:id', (req, res) => {
  const id = req.params.id
  const vote = Number(req.body.vote)
  query.addVote(id, vote)
  res.redirect('/')
})

app.listen(port, (req, res) => {
  console.log('listening on port', port)
})
