import React, { Component } from 'react';
import MovieFilter from './movie-filter';

class Filters extends Component {
    render() {
        return (
            <React.Fragment>
                <MovieFilter
                    movies={this.props.movies}
                    selectedMovie={this.props.selectedMovie}
                    updateMovie={this.props.updateMovie}
                    updateGender={this.props.updateGender}
                    updateSort={this.props.updateSort}
                    fetchCharacters={this.props.fetchCharacters}
                />
            </React.Fragment>
        );
    }
}

export default Filters;
