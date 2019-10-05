//Select one db to work with:

//For SQL
const sqlDb = require('../../db/sql');
const queryAsync = require('util').promisify(sqlDb.query.bind(sqlDb));
//For Mongo
// const mongoDb = require('../../db/mongodb')

module.exports = {
  getAll: () => queryAsync('SELECT * FROM favorites'),
  getOneByTitle: title =>
    queryAsync('SELECT * FROM favorites WHERE title = ?', [title]).then(
      data => data[0]
    ),

  saveOne: movie => {
    let insertMovie = {};
    for (let key in movie) {
      if (
        [
          'id',
          'title',
          'release_date',
          'overview',
          'genre_ids',
          'poster_path'
        ].includes(key) &&
        movie[key] !== undefined
      ) {
        insertMovie[key] =
          key === 'genre_ids' ? JSON.stringify(movie[key]) : movie[key];
      }
    }
    // console.log(insertMovie);
    return queryAsync('INSERT IGNORE INTO favorites SET ?', insertMovie);
  },

  /* delete from favorites by first criteria in the body */
  delete: params => {
    let key = Object.keys(params)[0];
    let value = params[key];

    return queryAsync('DELETE FROM favorites WHERE ?? = ?', [key, value]);
  }
};
