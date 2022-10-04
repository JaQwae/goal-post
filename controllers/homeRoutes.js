const router = require("express").Router();

// renders homepage
router.get("/", async (req, res) => {
    try {
        res.send("homepage");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router