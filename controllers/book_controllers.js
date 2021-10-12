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

router.get("/new-book", (req, res) => {
    res.render("newBook");
});

router.post("/", async (req, res) => {
    try {
        await Book.create(req.body);
        return res.redirect("/all-books");
    } catch (error) {
        return console.log(error);
    }
});

router.get("/:id", async function (req, res, next) {
    try {
        
        const book = await Book.findById(req.params.id);
        const reviews = await Review.find({book: req.params.id}).populate("book");

        const user_log = [];
        const test = [];

        for (let i = 0; i <= reviews.length - 1; i++) {
            user_log[i] = reviews[i].user;
            test[i] = await Review.find({user: user_log[i]}).populate("user"); 
        }

        const context = {
            book,
            reviews,
            test,
        };

        return res.render("books/showBook", context);

    } catch (error) {
        return console.log(error);
    }
});

//Create new review
router.post("/:id", async function (req, res) {
    try {
        await Review.create(req.body);

        return res.redirect('back');
    } catch (error) {
        return console.log(error);
    }
});

router.get("/:id/edit", async (req, res) => {
    try {

        const book = await Book.findById(req.params.id);
        return res.render("editBook.ejs", {book});

    } catch (error) {
        return console.log(error);
    }
});

router.put("/:id", (req, res) => {
    Book.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true,
        },
        (error, updatedBook) => {
            if (error) return console.log(error);
            return res.redirect(`/all-books/${updatedBook.id}`);
        },
    );
});

router.delete("/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id, (error, deletedBook) => {
        if (error) return console.log(error);

        console.log(deletedBook);
        return res.redirect("/all-books");
    });
});

module.exports = router;

