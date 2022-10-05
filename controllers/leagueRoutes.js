const router = require('express').Router();
const withAuth = require('../utils/auth')

router.get('/big3chart', withAuth, async (req, res) => {
    try {
        
        // const dbPostData = await Post.findAll();
        
        // // Serialize user data so templates can read it
        // const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        // Pass serialized post data into Handlebars.js template
        res.render('big3chart');

    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

router.get('/mlbchart', withAuth, async (req, res) => {
    try {
        
        // const dbPostData = await Post.findAll();
        
        // // Serialize user data so templates can read it
        // const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        // Pass serialized post data into Handlebars.js template
        res.render('mlbchart');

    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

router.get('/nflchart', withAuth, async (req, res) => {
    try {
        
        // const dbPostData = await Post.findAll();
        
        // // Serialize user data so templates can read it
        // const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        // Pass serialized post data into Handlebars.js template
        res.render('nflchart');

    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

router.get('/wnbachart', withAuth, async (req, res) => {
    try {
        
        // const dbPostData = await Post.findAll();
        
        // // Serialize user data so templates can read it
        // const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        // Pass serialized post data into Handlebars.js template
        res.render('wnbachart');

    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});



module.exports = router;