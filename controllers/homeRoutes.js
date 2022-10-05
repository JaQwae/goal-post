const router = require("express").Router();

// renders welcome page
router.get('/', async (req, res) => {
    try {
        res.render('homepage');

    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

module.exports = router;
