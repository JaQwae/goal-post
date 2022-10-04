const router = require('express').Router();

router.get("/", async (req, res) => {
    try {
        const loginStatus = await req.session.loggedIn
        //If a session exists, redirect the request to the homepage
        if (loginStatus) {
            res.redirect('/');
            return;
        }
        res.render('login');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

