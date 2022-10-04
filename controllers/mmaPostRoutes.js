const router = require("express").Router();
const { User, Post, Comment } = require('../models');

// renders homepage
router.get('/', async (req, res) => {
    try {
        
        const dbPostData = await Post.findAll();
        
        // Serialize user data so templates can read it
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        // Pass serialized post data into Handlebars.js template
        res.render('homepage', { posts });

    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

module.exports = router