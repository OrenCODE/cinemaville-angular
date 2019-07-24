const express = require('express');
const router = express.Router();

const Movie = require('../../models/Movie');

// GET all movies
router.get('/', (req, res) => {
    Movie.find()
        .then(movies => res.json(movies))
        .catch(err => console.log(err));
});

// GET movie by ID
router.get('/:id', (req, res) => {
    Movie.findById(req.params.id).then(movie => res.json(movie))
});

// DELETE movie
router.delete('/:id', (req, res) => {
    Movie.findById(req.params.id).then(movie =>
        movie.remove()
            .then(() => res.json({success: true}))
            .catch(err => res.status(404).json({success: false}))
    )
});

// Add movie
router.post('/', (req, res) => {
    const {title, actors, genre} = req.body;
    let newMovie = new Movie({
        title,
        actors,
        genre
    });

    newMovie.save()
        .then(movie => res.json(movie))
});

// Edit Movie
router.put('/:id',
    (req, res) => {
        Movie.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
            Movie.findOne({_id: req.params.id}).then((movie) => {
                res.json(movie)
            })
        })
    });

module.exports = router;

