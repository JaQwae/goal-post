const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const myPostRoutes = require('./myPostRoutes');
const postRoutes = require('./postRoutes');
const leagueRoutes = require('./leagueRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/mypost', myPostRoutes);
router.use('/post', postRoutes);
router.use('/league', leagueRoutes);
router.use('/login', loginRoutes);

module.exports = router;
