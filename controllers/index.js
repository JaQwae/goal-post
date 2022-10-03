const router = require('express').Router();

const apiRoutes = require('./api');
const welcomeRoutes = require('./welcomeRoutes');
const homeRoutes = require('./homeRoutes');
const donationRoutes = require('./donationRoutes');
const investorRoutes = require('./investorRoutes');
const profileRoutes = require('./profileRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', welcomeRoutes);
router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/donation', donationRoutes);
router.use('/investor', investorRoutes);
router.use('/profile', profileRoutes);
router.use('/login', loginRoutes);

module.exports = router;
