const express = require('express');
const router = express.Router();

const Book = require("../models/book");
const Review = require("../models/review");
const User = require("../models/user");




/*-------------NEW USER ROUTE-------------*/
router.get("/new-user", function (req, res) {

    res.render('newUser.ejs');
});

/*-------show route-----------*/
router.get('/login/:id', (req, res, next) => {
    User.findById( req.params.id, (error, foundUser) => {
        
        if(error) {
            return console.log(error);
            req.error = error
            return next();
        }

        const context = {
            user: foundUser,
        }
        
        res.render('./users/showUser', context);
    });
});

// create route
router.post('/', (req, res) => {
    
    User.create(req.body, (error, createdUser) => {
        if (error) {
            return console.log(error)
        }

        console.log(createdUser);
        return res.redirect('/login');
    })
    
})




//login index page
router.get("/login", function (req, res) {

    User.find({}, (error, user) => {
        if(error) {
            console.log(error);
        }

        const context = {
            user,
        }
        res.render('./users/login', context);

    })
    
});

router.get("/login/:id", function (req, res) {
    res.send("This is where I create a new user");
});

module.exports = router;