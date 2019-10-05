var express = require('express');
var bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes.js');

var app = express();
app.use(bodyParser.json());
app.use('/movies', movieRoutes);
app.use(express.static(__dirname + '/../client/dist'));

//***********************************************************************************************************************

/*
Use the routes below to build your application:

|      URL         | HTTP Verb |  Result                                                     |
| :------------:   | :-------: |------------------------------------------------------:      |
|     /genres      |   GET     |  Respond with JSON of all genres                            |
|     /search      |   GET     |  Respond with JSON of all movies by the selected genre      |
|     /save        |   POST    |  Save selected movie as favorite                            |
|     /delete      |   POST    |  Remove selected movie as favorite                          |

*/

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
