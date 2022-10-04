const router = require('express').Router();

const apiRoutes = require('./api');
const welcomeRoutes = require('./welcomeRoutes');
const mmaPostRoutes = require('./mmaPostRoutes');
const investorRoutes = require('./investorRoutes');
// const profileRoutes = require('./profileRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', welcomeRoutes);
router.use('/api', apiRoutes);
router.use('/mma', mmaPostRoutes);
router.use('/investor', investorRoutes);
// router.use('/profile', profileRoutes);
router.use('/login', loginRoutes);

module.exports = router;
