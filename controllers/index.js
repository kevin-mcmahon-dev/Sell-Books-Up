require("../config/db.connection");

module.exports = {
    book: require("./book_controllers"),
    review: require("./review_controllers"),
    user: require("./user_controllers"),
};