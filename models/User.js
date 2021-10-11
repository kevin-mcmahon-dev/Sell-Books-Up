const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "A username must be entered."],
    }, 
    password: {
        type: String,
        require: [true, "A password must be entered."],
    },
    // Stretch

    // email: {
    //     type: String,
    //     require: [true, "An email must be entered."],
    // }, 

    // This array will contain all info from books added to cart to pick which key/value pairs 
    // we want to access directly from user model.
    // Question: Would this feature be better implemented as a direct link to the book model?

    // cart: [{
    //     type: String
    // }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;