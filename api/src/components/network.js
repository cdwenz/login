const express = require ("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User")
const { getToken, COOKIE_OPTIONS, getRefreshToken } = require("../../authenticate.js")
console.log("ROUTE", getToken, COOKIE_OPTIONS, getRefreshToken)
//Landing Page

// router.get("/", (req,res) => {  
//     res.send("Welcome")
// })

// //Profile home
// router.get("/home", (req,res) => {  
//     res.send("Welcome to home")
// })

// // Login Page
// router.get("/login", (req,res) => {  
//     res.send("login")
   
// })
// router.post("/login", passport.authenticate("local-signin", {
//     successRedirect: "/home",
//     failureRedirect: "/login",
//     passReqToCallback: true
// }))

// // Register Page
// router.get("/signup", (req,res) => {
  
//     res.send("signup")
// })
// router.post("/signup", passport.authenticate("local-signup", {
//     successRedirect: "/login",
//     failureRedirect: "/signup",
//     passReqToCallback: true
// }))

// router.get('/logout', (req, res, next) => {
//     req.logout();
//     res.redirect('/');
// });

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//         return next();
//     res.redirect('/login');
// };

// router.get('/profile', isLoggedIn, (req, res, next) => {
//     res.render('profile') 
// });

router.post("/signup", (req,res) => {
     
        User.register(
          new User({ username: req.body.email}),
          req.body.password,
          (err, user) => {
            if (err) {
              res.statusCode = 500
              console.log("NETWORK",err)
              res.send(err)
            } else {
              const token = getToken({ _id: user._id })
              const refreshToken = getRefreshToken({ _id: user._id })

              user.refreshToken.push({ refreshToken })
              
              user.save((err, user) => {
                if (err) {
                  res.statusCode = 500
                  console.log("NETWORK SAVE",err)
                  res.send(err)
                } else {
                  res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                  res.send({ success: true, token })
                }
              })
            }
          }
        )
})

router.get("/asd",(req,res) => {
  res.send("OK")
})

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log("LOGIN")
  const token = getToken({ _id: req.user._id })
  const refreshToken = getRefreshToken({ _id: req.user._id })
  User.findById(req.user._id).then(
    user => {
      user.refreshToken.push({ refreshToken })
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500
          res.send(err)
        } else {
          res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
          res.send({ success: true, token })
        }
      })
    },
    err => next(err)
  )
})




module.exports = router;