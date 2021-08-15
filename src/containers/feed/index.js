import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from '../../components/alert';
import Filters from '../../components/filters';
import Loader from '../../components/loader';
import MovieList from '../../components/movie-list';
import TopNav from '../../components/top-nav';
import { updateGender, updateMovie, updateSort } from '../../redux/preference/actions';
import { fetchCharacters, fetchMovies } from '../../redux/starwars/actions';
import './styles.css';

class FeedContainer extends Component {
    componentDidMount() {
        if (this.props.starwars.movies.length === 0) {
            this.props.fetchMovies();
        }
    }

    renderMovie() {
        return <MovieList movies={this.props.starwars.movies || []} />;
    }

    renderErrors() {
        if (!this.props.starwars.error) {
            return null;
        }

        let message = '';
        switch (this.props.starwars.error.toLowerCase()) {
            case 'ajax error':
                message = 'Error trying to connect to server';
                break;
            default:
                message = this.props.starwars.error;
                break;
        }

        return <Alert type="danger">{message}</Alert>;
    }

    renderAlerts() {
        const error = this.renderErrors();

        if (error) {
            return <div className="alert-group">{error}</div>;
        }

        return null;
    }

    render() {
        return (
            <div className="page-wrap">
                <TopNav />
                {this.renderAlerts()}
                <div className="container mb-5 pb-4">
                    <div className="header-row clearfix">
                        <div className="group-filters">
                            {this.props.starwars.movies && this.props.starwars.movies.length !== 0 && (
                                <Filters
                                    movies={this.props.starwars.movies}
                                    selectedMovie={this.props.preference.movie}
                                    updateMovie={this.props.updateMovie}
                                    updateGender={this.props.updateGender}
                                    updateSort={this.props.updateSort}
                                    fetchCharacters={this.props.fetchCharacters}
                                />
                            )}
                        </div>
                    </div>
                    <div className="body-row">
                        {this.props.starwars.processing && <Loader />}
                        {!this.props.starwars.processing && this.renderMovie()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        preference: store.preference,
        starwars: store.starwars
    };
};

const mapDispatchToProps = {
    updateMovie,
    updateGender,
    updateSort,
    fetchMovies,
    fetchCharacters
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
