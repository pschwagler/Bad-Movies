const request = require('request');
const axios = require('axios');
const api_key = process.env.API_KEY || '';
// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file
const apiURL = 'https://api.themoviedb.org/3';

exports.getGenres = function() {
  const url = apiURL + '/genre/movie/list';
  const params = { api_key };

  return axios
    .get(url, { params })
    .then(response => response.data)
    .catch(err => console.log(err));
};

exports.getMovieList = function(genre) {
  const url = apiURL + '/discover/movie';
  const params = {
    api_key,
    sort_by: 'vote_count.asc, popularity.desc',

    include_video: false
  };
  if (genre) {
    params.with_genres = genre;
  } else {
    console.log('No genre provided, searching all movies');
  }

  return axios
    .get(url, { params })
    .then(response => response.data)
    .catch(err => console.log(err));
};
