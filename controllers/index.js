const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mmaPostRoutes = require('./mmaPostRoutes');
const leagueRoutes = require('./leagueRoutes');
// const profileRoutes = require('./profileRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/mma', mmaPostRoutes);
router.use('/league', leagueRoutes);
// router.use('/profile', profileRoutes);
router.use('/login', loginRoutes);

module.exports = router;
