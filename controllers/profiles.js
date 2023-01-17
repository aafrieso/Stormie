import { Profile } from "../models/profile.js"

function generateProfile(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/new", {
      profiles: profiles
    })
  })
  .catch(err => {
    res.redirect("/profiles")
  })
}

export {
  generateProfile as new,
}