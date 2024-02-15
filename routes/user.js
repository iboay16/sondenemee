const express = require("express");
const router = express.Router();

router.use("/", async function (req, res) {
  res.render("views/users/blogs");
});

module.exports = router;
