const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");

const Book = require("../models/book");
const Review = require("../models/review");
const User = require("../models/user");

// let authorized = false;
// let userState;

// router.get("/", async function (req, res) {
//     // if (!authorized) {
//     //     userState = "/login";
//     // } else if (authorized) {
//     //     userState = req.session.currentUser.id;
//     // }

//     res.render("home");
// });
/*-------------NEW USER ROUTE-------------*/
router.get("/new-user", function (req, res) {
    res.render('newUser.ejs');
});

router.post("/new-user", async function (req, res) {
    try {
        const foundUser = await User.exists({username: req.body.username});

        if (foundUser) {
            console.log("Account already exists");
            return res.redirect("/login");
        }

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;

        const newUser = await User.create(req.body);
        console.log(newUser);

        return res.redirect("/login");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

// create route
// Unsure about needing this block anymore

// router.post('/', (req, res) => {
    
//     User.create(req.body, (error, createdUser) => {
//         if (error) {
//             return console.log(error)
//         }

//         console.log(createdUser);
//         return res.redirect('/login');
//     })   
// })

//login index page
router.get("/login", function (req, res) {
    res.render("users/login");
});

router.post("/login", async function (req, res) {
    try {
        const foundUser = await User.findOne({username: req.body.username});
        console.log(`foundUser object is ${foundUser}`);

        if (!foundUser) return res.redirect("/new-user");

        const match = await bcrypt.compare(req.body.password, foundUser.password);
        
        if (!match) return res.send("The supplied username or password is incorrect.");

        req.session.currentUser = {
            //originally - "id: foundUser._id"
            _id: foundUser._id,
            username: foundUser.username,
        };

        console.log(`Current User: ${req.session.currentUser}`);
        console.log(`Current User unique id: ${req.session.currentUser._id}`);
        return res.redirect(`/login/${req.session.currentUser._id}`);

    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

// router.get("/login/:id", function (req, res) {
//     res.send("This is where I create a new user");
// });

/*-------show route-----------*/
router.get(`/login/:id`, (req, res, next) => {
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

router.get("/logout", async function (req, res) {
    try {
    
        await req.session.destroy();
        return res.redirect("/");

    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

module.exports = router;