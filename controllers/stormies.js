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

// function newStormie(req, res) {
// res.render('stormies/new')
// }

function create(req, res) {
  // req.body.owner = req.user.profile._id
  Stormie.create(req.body)
  .then(zipCode => {
  res.redirect('/stormies')
})
.catch(error => {
  console.log(error)
  res.redirect('/stormies')
})
}

function show(req, res) {
  Stormie.findById(req.params.id)
  .populate("owner")
  .then(stormie => {
    res.render('stormies/show', {
    title: "Stcder",
    stormie, 
    // zipCode: stormie.zipCode
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/stormies')
  })
}

function edit(req, res) {
  Stormie.findById(req.params.id)
  .then(stormie => {
    res.render('stormies/edit', {
      title: "Edit ZIP",
      stormie
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/stormies')
  })
}

function update(req, res) {
  Stormie.findById(req.params.id)
  .then(stormie => {
    if (stormie.owner.equals(req.user.profile._id)) {
      stormie.updateOne(req.body)
      .then(() => {
        res.redirect("/stormies")
      })
    } else {
      throw new Error("not authorized")
    }
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
  // newStormie as new,
  create,
  show,
  edit,
  update,
  deleteStormie as delete
}