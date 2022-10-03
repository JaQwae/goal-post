const router = require("express").Router();

// renders donation homepage
router.get("/", async (req, res) => {
    try {
        res.send("donation");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;