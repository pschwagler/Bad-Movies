const model = require('../models/movieModel.js');
const movieApi = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    movieApi
      .getMovieList(req.query.genre)
      .then(({ results }) => res.send(results))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getGenres: (req, res) => {
    movieApi
      .getGenres()
      .then(data => res.send(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  saveMovie: (req, res) => {
    model
      .saveOne(req.body)
      .then(data => res.status(201).send(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  deleteMovie: (req, res) => {
    if (!req.query.id && !req.query.title) {
      return req
        .status(412)
        .send('Please include query parameter with name or id');
    }
    model
      .delete(req.query)
      .then(() => res.send())
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getFavorites: (req, res) => {
    model
      .getAll()
      .then(data => res.send(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};
