module.exports = {
  host: 'localhost',
  user: 'root',
  password: process.env.SQL_KEY || '',
  database: 'badmovies'
};
