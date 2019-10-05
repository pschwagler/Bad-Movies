import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: null,
      movies: [],
      favorites: [],
      showFaves: false
    };

    this.swapFavorites = this.swapFavorites.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    if (this.state.showFaves) {
      Axios.get('/movies/favorites')
        .then(({ data }) => this.setState({ favorites: data }))
        .catch(err => console.log(err));
    } else {
      Axios.get('/movies/search', { params: { genre: this.state.genre } })
        .then(({ data }) => this.setState({ movies: data }))
        .catch(err => console.log(err));
    }
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState(
      {
        showFaves: !this.state.showFaves
      },
      () => this.getMovies()
    );
  }

  handleGenreSelect({ target }) {
    console.log(target);
    this.setState({ genre: +target.value }, () => this.getMovies());
  }

  render() {
    return (
      <div className='app'>
        <header className='navbar'>
          <h1>Bad Movies</h1>
        </header>

        <div className='main'>
          <Search
            handleSelect={this.handleGenreSelect}
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
