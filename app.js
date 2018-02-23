var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json())

Genre = require('./models/genre'); 
Book = require('./models/book'); 

mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;

app.get('/',function (req,res) {
    res.send("Bookstore Node")
});

// Genres
app.get('/api/genres', function(req, res) {
    Genre.getGenres(function (err, genres) {
        if(err) throw err;
        res.json(genres);
    })
});
app.get('/api/genres/:_id', function(req, res) {
    Genre.getGenreById(req.params._id, function (err, genre) {
        if(err) throw err;
        res.json(genre);
    })
});
app.post('/api/genres', function(req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if(err) throw err;
        res.json(genre);
    })
});
app.put('/api/genres/:_id', function(req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if(err) throw err;
        res.json(genre);
    })
});
app.delete('/api/genres/:_id', function(req, res) {
    var id = req.params._id;
    Genre.deleteGenre(id, function (err, genre) {
        if(err) throw err;
        res.json(genre);
    })
});

// Books
app.get('/api/books', function(req, res) {
    Book.getBooks(function (err, books) {
        if(err) throw err;
        res.json(books);
    })
});
app.get('/api/books/:_id', function(req, res) {
    Book.getBookById(req.params._id,function (err, book) {
        if(err) throw err;
        res.json(book);
    })
});
app.post('/api/books', function(req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if(err) throw err;
        res.json(book);
    })
});
app.put('/api/books/:_id', function(req, res) {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {new: true}, function (err, book) {
        if(err) throw err;
        res.json(book);
    })
});
app.delete('/api/books/:_id', function(req, res) {
    var id = req.params._id;
    Book.deleteBook(id, function (err, book) {
        if(err) throw err;
        res.json(book);
    })
});

app.listen(3000,function () {
    console.log("Node Bookstore started on port 3000");
});
