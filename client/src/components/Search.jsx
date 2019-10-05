import React from 'react';
import Axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };

    this.getGenres = this.getGenres.bind(this);
  }
  getGenres() {
    Axios.get('/movies/genres')
      .then(({ data }) => {
        this.setState({ genres: data.genres });
        this.props.handleSelect({ target: { value: data.genres[0].id } });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className='search'>
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.props.handleSelect}>
          {this.state.genres.map(genre => (
            <option value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
