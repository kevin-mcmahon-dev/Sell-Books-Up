const express = require('express');
const router = express.Router();
const Book = require("../models/book");

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
    res.render("home");
})

module.exports = router;