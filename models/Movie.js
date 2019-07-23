const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    actors:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    }
});

module.exports = Movie = mongoose.model('movies', moviesSchema);
