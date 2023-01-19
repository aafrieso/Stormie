import { Stormie } from '../models/stormie.js'

function index(req, res) {
  Stormie.find({})
  .then(stormies => {
    res.render('stormies/index', {
    title: "Stormie Location",
    stormies,
    // time: req.time
    })
  })
  .catch(error => {
  console.log(error)
  res.redirect('/')})
}

function newStormie(req, res) {
res.render('stormies/new')
}

function create(req, res) {
  req.body.learned = false
  Stormie.create(req.body)
  .then(stormie => {
  res.redirect('/stormies')
})
.catch(error => {
  console.log(error)
  res.redirect('/stormies')
})
}

function show(req, res) {
  Stormie.findById(req.params.id)
  .then(stormie => {
    res.render('stormies/show', {
    title: "Stormie Weather",
    stormie
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/stormies')
  })
}

function deleteStormie(req, res) {
  Stormie.findByIdAndDelete(req.params.id)
  .then(stormie => {
      res.redirect('/stormies')
})
    .catch(error => {
    console.log(error)
    res.redirect('/stormies')
    })
}

export {
    index,
    newStormie as new,
    create,
    show,
    deleteStormie as delete
}