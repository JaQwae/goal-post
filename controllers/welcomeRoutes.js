const router = require("express").Router();

// renders welcome page
router.get("/", async (req, res) => {
  try {
    res.send("welcomePage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
