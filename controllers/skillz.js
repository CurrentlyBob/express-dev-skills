import { skillz } from "../data/skillz-data.js";
import { Skillz } from "../models/skillz.js";

function index(req, res) {
  Skillz.find({})
  .then(skillz => {
    res.render("skillz/index", {
      skillz: skillz,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}
function newSkill(req, res) {
  res.render('skillz/new')
}
function create(req, res) {
  console.log(req.body)
  req.body.smelly = false
  Skillz.create(req.body)
  .then(skill => {
    res.redirect('/skillz')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skillz')
  })
}
function show(req, res) {
  Skillz.findById(req.params.skillId)
  .then(skill => {
    res.render('skillz/show', {
      skill:skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skillz')
  })
}

export { 
  index,
  newSkill as new,
  create,
  show,
 };
