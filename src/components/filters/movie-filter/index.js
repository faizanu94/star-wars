import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

class MovieFilter extends Component {
    state = {
        filterText: '',
        selectedIndex: 0,
        showDropdown: false
    };

    getFilteredMovies() {
        return this.state.filterText
            ? this.props.movies.filter((movie) => {
                  const movieText = movie.title.toLowerCase();
                  const selectedText = this.state.filterText.toLowerCase();
                  return movieText.indexOf(selectedText) >= 0;
              })
            : [...this.props.movies];
    }

    renderMovies() {
        const movies = this.getFilteredMovies();

        return movies.map((movie, counter) => {
            return (
                <a href="#/" onMouseDown={() => this.selectMovie(counter)} key={counter}>
                    <span className="select-menu-item-text p-2">
                        {movie.title} ({movie.release_date})
                    </span>
                </a>
            );
        });
    }

    onKeyDown = (e) => {
        const { selectedIndex } = this.state;
        const isEnterKey = e.keyCode === 13;
        const isUpKey = e.keyCode === 38;
        const isDownKey = e.keyCode === 40;

        if (!isUpKey && !isDownKey && !isEnterKey) {
            return;
        }

        const filteredMovies = this.getFilteredMovies();
        e.preventDefault();

        if (isUpKey && selectedIndex > 0) {
            this.setState((prevState) => ({
                selectedIndex: prevState.selectedIndex - 1
            }));
        } else if (isDownKey && selectedIndex < filteredMovies.length - 1) {
            this.setState((prevState) => ({
                selectedIndex: prevState.selectedIndex + 1
            }));
        } else if (isEnterKey && filteredMovies[selectedIndex]) {
            this.selectMovie(selectedIndex);
        }
    };

    selectMovie = (selectedIndex) => {
        const filteredMovies = this.getFilteredMovies();
        const selectedMovie = filteredMovies[selectedIndex];
        if (!selectedMovie) {
            return;
        }

        this.setState({
            filterText: '',
            showDropdown: false
        });

        const characters = selectedMovie.characters.filter((character) => !this.props.starwars.characters[character]);

        if (characters.length > 0) {
            this.props.fetchCharacters(characters).then(() => {
                this.props.updateGender('');
                this.props.updateSort({});
                this.props.updateMovie(selectedMovie);
            });
        } else {
            this.props.updateGender('');
            this.props.updateSort({});
            this.props.updateMovie(selectedMovie);
        }
    };

    hideDropdown = () => {
        this.setState({
            showDropdown: false,
            filterText: ''
        });
    };

    filterMovies = (e) => {
        this.setState({
            filterText: e.target.value,
            selectedIndex: 0
        });
    };

    getMovieDropdown() {
        return (
            <div className="movie-select text-warning mt-2">
                <h4 className="text-warning text-center">Search Movie</h4>
                <div className="select-menu-filters">
                    <div className="select-menu-text-filter">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter Movies"
                            onBlur={this.hideDropdown}
                            onChange={this.filterMovies}
                            onKeyDown={this.onKeyDown}
                        />
                    </div>
                </div>
                <div className="select-menu-list">{this.renderMovies()}</div>
            </div>
        );
    }

    toggleDropdown = () => {
        this.setState((prevState) => ({
            showDropdown: !prevState.showDropdown
        }));
    };

    render() {
        return (
            <div className="movie-filter-wrap">
                <button disabled={this.props.starwars.processing} onClick={this.toggleDropdown} className="btn btn-warning">
                    <i className="fa fa-filter m-1"></i>
                    {this.props.selectedMovie?.title || 'Movie'}
                </button>
                {this.state.showDropdown && this.getMovieDropdown()}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        starwars: store.starwars
    };
};

export default connect(mapStateToProps)(MovieFilter);
