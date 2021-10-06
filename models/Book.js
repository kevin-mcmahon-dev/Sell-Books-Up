const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "A title must be provided."],
    },
    image: {
        type: String,
        required: [true, "An image must be provided"],
    },
    genre: [{
        type: String,
    }],
    author: {
        type: mongoose.Types.ObjectId,
        ref: "Author",
    },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;