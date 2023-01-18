import { Stormie } from '../models/stormie.js'
import { Profile } from '../models/stormie.js'

import { Stormie } from '../models/skill.js'
function index(req, res) {
    Skill.find({})
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
Skill.findById(req.params.id)
.then(skill => {
    res.render('stormies/show', {
        stormie: stormie
    })
})
.catch(error => {
    console.log(error)
    res.redirect('/stormies')
})
}

function deleteStormie(req, res) {
    Skill.findByIdAndDelete(req.params.id)
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