const express = require ("express");
const router = express.Router();
const passport = require("passport");

//Landing Page
router.get("/", (req,res) => {  
    res.send("Welcome")
})
//Profile home
router.get("/home", (req,res) => {  
    res.send("Welcome to home")
})

// Login Page
router.get("/login", (req,res) => {  
    res.send("login")
   
})
router.post("/login", passport.authenticate("local-signin", {
    successRedirect: "/home",
    failureRedirect: "/login",
    passReqToCallback: true
}))

// Register Page
router.get("/signup", (req,res) => {
  
    res.send("signup")
})
router.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/login",
    failureRedirect: "/signup",
    passReqToCallback: true
}))

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
};

router.get('/profile', isLoggedIn, (req, res, next) => {
    res.render('profile') 
});

module.exports = router;