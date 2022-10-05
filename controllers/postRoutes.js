const router = require("express").Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

// renders post page
router.get('/', withAuth, async (req, res) => {
    try {
        
        const dbPostData = await Post.findAll();
        
        // Serialize user data so templates can read it
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        // Pass serialized post data into Handlebars.js template
        res.render('posthome', { posts, loggedIn: req.session.loggedIn });

    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

// renders an individual MMA post
router.get('/:id', withAuth, async (req, res) => {
    try{
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['content', 'createdAt', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    }
                }
            ],
        });

        const post = dbPostData.get({ plain: true });
        console.log(post)
        post.logged_in = req.session.logged_in
        res.render('singlePost', { post, loggedIn: req.session.loggedIn });

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router