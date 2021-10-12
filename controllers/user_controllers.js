const express = require('express');
const router = express.Router();

const Book = require("../models/book");
const Review = require("../models/review");
const User = require("../models/user");


router.get("/new-user", function (req, res) {
    res.send("This is where I create a new user");
});

router.get("/login", function (req, res) {
    res.send("This is where I create a new user");
});

router.get("/login/:id", function (req, res) {
    res.send("This is where I create a new user");
});

module.exports = router;