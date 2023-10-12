const express = require("express");
const router = express.Router();
const emsEmporiumController = require("../Controllers/emsEmporiumController");
module.exports = router;
router.get("/products", (req, res) => {
  emsEmporiumController.getData(req, res);
});
// new route for adding two numbers
// router.get("/add", (req, res) => {
//   emsEmporium.add(req, res);
// });
