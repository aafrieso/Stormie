import { Stormie } from '../models/stormie.js'
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
res.render('skills/new')
}

function create(req, res) {
req.body.learned = false
Skill.create(req.body)
.then(skill => {
    res.redirect('/skills')
})
.catch(error => {
    console.log(error)
    res.redirect('/skills')
})
}

function show(req, res) {
Skill.findById(req.params.id)
.then(skill => {
    res.render('skills/show', {
        skill: skill
    })
})
.catch(error => {
    console.log(error)
    res.redirect('/skills')
})
}

function deleteSkill(req, res) {
    Skill.findByIdAndDelete(req.params.id)
    .then(skill => {
    res.redirect('/skills')
})
    .catch(error => {
    console.log(error)
    res.redirect('/skills')
    })
}

export {
    index,
    newSkill as new,
    create,
    show,
    deleteSkill as delete
}