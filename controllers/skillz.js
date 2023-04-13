import { skillz } from "../data/skillz-data.js";

function index(req, res) {
  res.render("skillz/index", {
    skillz: skillz,
  });
}

export { index };
