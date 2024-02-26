const router = require("express").Router();

router.use("/", (req, res) => {
  res.send("Users list");
});

module.exports = router;
