import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './list-item';
import './styles.css';

class MovieList extends Component {
    render() {
        return (
            <div className="movies-list">
                <div className="row list-container">
                    <ListItem movie={this.props.preference.movie} key={this.props.preference.movie.episode_id} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        preference: store.preference
    };
};

export default connect(mapStateToProps)(MovieList);
