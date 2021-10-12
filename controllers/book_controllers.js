const express = require('express');
const router = express.Router();

const Book = require("../models/book");
const Review = require("../models/review");
const User = require("../models/user");


Book.deleteMany({}, function (error, deletedBooks) {
    if (error) {
        return console.log(error);
    }
    Book.insertMany(
        [
        {
            title: "The Sirens of Titan",
            image: "https://images-na.ssl-images-amazon.com/images/I/41zz1LAegYL._SX325_BO1,204,203,200_.jpg",
            author: "Kurt Vonnegut",
            price: 17,
        },
        {
            title: "Ulysses",
            image: "https://images-na.ssl-images-amazon.com/images/I/41pOehbTu7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
            author: "James Joyce",
            price: 15,
        },
        {
            title: "Swann's Way",
            image: "https://images-na.ssl-images-amazon.com/images/I/41uC4I5Pr9L._SX398_BO1,204,203,200_.jpg",
            author: "Marcel Proust",
            price: 21,
        },
        ],
        function (error, createdBooks) {
        if (error) {
            return console.log(error);
        }
        console.log("=== Seed Complete ===");
        console.log(createdBooks);
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


module.exports = router;