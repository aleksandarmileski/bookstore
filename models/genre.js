var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    }
})

var Genre = module.exports = mongoose.model('Genre', genreSchema)

// Get genres
module.exports.getGenres = function (callback,limit) {
    Genre.find(callback).limit(limit);
}

// Get genre
module.exports.getGenreById = function (genreId, callback) {
    Genre.findById(genreId, callback);
}

// Add genre
module.exports.addGenre = function (genre, callback) {
    Genre.create(genre, callback);
}

// Update genre
module.exports.updateGenre = function (id, genre, options, callback) {
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query,update, options, callback);
}

// Delete genre
module.exports.deleteGenre = function (id, callback) {
    var query = {_id: id};
    Genre.remove(query, callback);
}