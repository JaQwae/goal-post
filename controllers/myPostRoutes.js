const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

// My post route
router.get('/', withAuth, async (req, res) => {
    try {
        const dbDashboardData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
            ]
        })
        const posts = dbDashboardData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.render('mypost', { posts, loggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
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
        })
    
        const post = dbPostData.get({ plain: true });
        console.log(post)
        post.logged_in = req.session.logged_in
        res.render('editPost', { post, loggedIn: req.session.loggedIn });

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new', (req, res) => {
    res.render('newPost');
});

module.exports = router