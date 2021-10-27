const express = require ("express");
const router = express.Router();

//Landing Page
router.get("/", (req,res) => {  
    res.send("Welcome")
})

// Login Page
router.get("/login", (req,res) => {  
    res.send("login")
   
})
router.post("/login", (req,res) => {  
    res.send("login")
   
})

// Register Page
router.get("/signup", (req,res) => {  
    res.send("signup")
})
router.post("/signup", (req,res) => {  
    res.send("signup")
})


module.exports = router;