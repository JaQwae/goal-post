const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.send("welcomePage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/homepage", async (req, res) => {
  try {
    res.send("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/donations", async (req, res) => {
  try {
    res.send("donations");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.send("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/investors", async (req, res) => {
  try {
    res.send("investors");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile", async (req, res) => {
  try {
    res.send("profile");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
