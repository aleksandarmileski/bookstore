var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    description:{
        type: String
    },
    year:{
        type: Number
    },
    pages:{
        type: Number
    },
    cover:{
        type: String
    },

})

var Book = module.exports = mongoose.model('Book', bookSchema)

// Get books
module.exports.getBooks = function (callback,limit) {
    Book.find(callback).limit(limit);
}

// Get book
module.exports.getBookById = function (bookId, callback) {
    Book.findById(bookId, callback);
}

// Add book
module.exports.addBook = function (book, callback) {
    Book.create(book, callback);
}

// Update book
module.exports.updateBook = function (id, book, options, callback) {
    var query = {_id: id};
    var update = book;
    Book.findByIdAndUpdate(query,update, options, callback);
}

// Delete book
module.exports.deleteBook = function (id, callback) {
    var query = {_id: id};
    Book.remove(query, callback);
}