const express = require('express');
const router = express.Router();

const Book = require("../models/book");
const Review = require("../models/review");
const User = require("../models/user");


// Book.deleteMany({}, function (error, deletedBooks) {
    // if (error) {
    //     return console.log(error);
    // }
    // Book.insertMany(
    //     [
    //     {
    //         title: "The Sirens of Titan",
    //         image: "https://images-na.ssl-images-amazon.com/images/I/41zz1LAegYL._SX325_BO1,204,203,200_.jpg",
    //         author: "Kurt Vonnegut",
    //         price: 17,
    //     },
    //     {
    //         title: "Ulysses",
    //         image: "https://images-na.ssl-images-amazon.com/images/I/41pOehbTu7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    //         author: "James Joyce",
    //         price: 15,
    //     },
    //     {
    //         title: "Swann's Way",
    //         image: "https://images-na.ssl-images-amazon.com/images/I/41uC4I5Pr9L._SX398_BO1,204,203,200_.jpg",
    //         author: "Marcel Proust",
    //         price: 21,
    //     },
    //     ],
    //     function (error, createdBooks) {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log("=== Seed Complete ===");
    //     console.log(createdBooks);
    //     }
    // );
// });

Review.deleteMany({}, function (error, deletedReviews) {
    if (error) {
        return console.log(error);
    }
    Review.insertMany(
        [
        {
            rating: 5,
            content: "Wonderful Book",
            user: "616517bba27b340c38528c7e", 
            book: "616512adbfb6b5aa98753aea",
        },
        {
            rating: 1,
            content: "A miserable read",
            user: "6165174ca27b340c38528c7d",
            book: "616512adbfb6b5aa98753aec",
        },
        {
            rating: 3,
            content: "Not my cup of tea, but I see why someone might like it.",
            user: "6165180aa27b340c38528c7f",
            book: "616512adbfb6b5aa98753aec",
        },
        ],
        function (error, createdReviews) {
        if (error) {
            return console.log(error);
        }
        console.log("=== Seed Complete ===");
        console.log(createdReviews);
        }
    );
});

// router.get('/', async function (req, res) {
//     try {
    
//     const books = await Book.find({})

//     const context = {
//         books,
//     }

//     res.render('products/index', context);

//     } catch (error) {
//         return console.log(error);
//     }
// });

router.get("/", async function (req, res) {
    try {

        const books = await Book.find({});

        const context = {
            books,
        };

        res.render("books/allBooks", context);

    } catch (error) {

        return console.log(error);

    }
});

router.get("/:id", async function (req, res, next) {
    try {
        
        const book = await Book.findById(req.params.id);
        const reviews = await Review.find({book: req.params.id}).populate("book");
        const user = await Review.find({user: "_id"}).populate("user");
        console.log(reviews);

        // const user_log = [];
        // const user = [];

        // for (let i = 0; i <= reviews.length - 1; i++) {
        //     user_log[i] = reviews[i].user;
        //     user[i] = User.find({_id: user_log[i]}) 
        // }
        // console.log(user_log);
        // const user = await User.find({_id: reviews.user});


        const context = {
            book,
            reviews,
            // user,
        };

        return res.render("books/showBook", context);

    } catch (error) {
        return console.log(error);
    }
});


module.exports = router;