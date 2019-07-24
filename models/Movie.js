const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({

    name: String,
    genre: String,
    actors: [String],
    year: { type: Number, min: 1850 },
    image: String
});

module.exports = Movie = mongoose.model('movies', moviesSchema);
