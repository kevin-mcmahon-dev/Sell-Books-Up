const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "An author name must be provided."],
    },
    image: {
        type: String,
        required: [true, "An image of the author must be provided"],
    }, 
    book: [{
        type: mongoose.Types.ObjectId,
        ref: "Book",
    }],
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;