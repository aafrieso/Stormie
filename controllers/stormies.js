import { Stormie } from '../models/stormie.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
    Stormie.find({})
    .then(stormies => {
    res.render('stormies/index', {
    stormies: stormies,
    time: req.time
    })
})
.catch(error => {
    console.log(error)
    res.redirect('/')})
}

function newSkill(req, res) {
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
    newSkill as new,
    create,
    show,
    deleteStormie as delete
}