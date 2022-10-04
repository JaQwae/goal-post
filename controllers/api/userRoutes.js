const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
    console.log('post', req.body)
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        // Set up sessions with a 'loggedIn' variable set to `true`
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log("post err with creating user = " + err);
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        // find user who matched the search
        const userData = await User.findOne({ where: { username: req.body.username } });
        
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return
        }

        // verifies is password matches search
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        // Create session variables
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log("post err = " + err);
        res.status(400).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    // Destroy the session
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;