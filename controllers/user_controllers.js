const express = require('express');
const router = express.Router();

const Book = require("../models/book");
const Review = require("../models/review");
const User = require("../models/user");




/*-------------NEW USER ROUTE-------------*/
router.get("/new-user", function (req, res) {

    res.render('newUser.ejs');
});


//show reviews on page
router.get("/login/:id", async function (req, res, next) {
    try {
        
        const user = await User.findById(req.params.id)
        console.log('this is the user: ', user);
        const reviews = await Review.find({user: req.params.id}).populate("user");
        console.log('this is the review', reviews);
        // const book = await User.findById(req.params.id);
        

        const book_log = [];
        const book = [];

        for (let i = 0; i <= reviews.length - 1; i++) {
            book_log[i] = reviews[i].user;
            book[i] = await Review.find({user: book_log[i]}).populate("book"); 
        }
        console.log('this is the book', book);

        const context = {
            user,
            reviews,
            book,
        };

        return res.render("./users/showUser", context);

    } catch (error) {
        return console.log(error);
    }
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