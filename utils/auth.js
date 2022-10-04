const withAuth = (req, res, next) => {
    // If  user not logged in, redirect to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        // if logged in, execute the route
        next();
    }
}

module.exports = withAuth;