import 'animate.css/animate.min.css';
import React, { Component } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { connect } from 'react-redux';
import { updateGender, updateSort } from '../../../redux/preference/actions';
import './styles.css';

class ListItem extends Component {
    state = {
        showDropdown: false,
        columns: [
            {
                name: 'Name',
                selector: (row) => row.name,
                sortable: true
            },
            {
                name: 'Gender',
                selector: (row) => row.gender,
                sortable: true
            },
            {
                name: 'Height',
                selector: (row) => row.height,
                sortable: true
            }
        ]
    };

    componentWillMount() {
        createTheme('solarized', {
            text: {
                primary: '#ffc107'
            },
            context: {
                background: '#cb4b16',
                text: '#FFFFFF'
            },
            divider: {
                default: '#000'
            }
        });
    }

    renderMovie() {
        let characters = this.props.movie.characters.map((character) => this.props.characters[character]);
        if (this.props.preference.gender && this.props.preference.gender !== 'All Genders') {
            characters = characters.filter((character) => character?.gender === this.props.preference.gender);
        }
        const sum = characters
            .filter((character) => !isNaN(character?.height))
            .reduce((sum, character) => sum + Number(character?.height), 0);
        return (
            <div className="col-12 list-item-container">
                <div className="list-item-body">
                    <div className="movie-header">
                        <h2>
                            <a className="text-warning" href={this.props.movie.url} rel="noopener noreferrer" target="_blank">
                                <span className="text-warning">{this.props.movie.title}</span>
                                {this.props.movie.name}
                            </a>
                        </h2>
                        <p className="meta text-dark small">
                            Produced by &middot; <b>{this.props.movie.producer}</b>
                        </p>
                    </div>
                    <div className="movie-body">
                        <p className="text-dark">{this.props.movie.opening_crawl || 'No description given.'}</p>
                    </div>
                    <div className="gender-filter-wrap">
                        <button onClick={this.toggleDropdown} className="btn btn-warning">
                            <i className="fa fa-filter m-1"></i>
                            {this.props.preference.gender || 'Gender'}
                        </button>
                        {this.state.showDropdown && this.getGenderDropdown()}
                    </div>
                    <h4 className="text-warning">Characters</h4>
                    <DataTable
                        columns={this.state.columns}
                        data={characters}
                        defaultSortField="name"
                        theme="solarized"
                        customStyles={{ headCells: { style: { fontSize: '22px' } } }}
                    />
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-warning">
                                    <b>Total number of characters:</b> {characters.length}
                                </td>
                                <td className="text-warning">
                                    <b>Sum of the heights of the characters:</b> {sum} cm ({sum * 0.032808} ft / {sum * 0.3937} in)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <a
                    href={this.props.movie.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="author-link d-none d-lg-block d-xl-block d-md-block"
                >
                    <img className="author-img" src="/img/logo.png" alt={this.props.movie.title} />
                </a>
            </div>
        );
    }

    getGenderDropdown() {
        const genders = [
            'All Genders',
            ...new Set(this.props.movie.characters.map((character) => this.props.characters[character]?.gender))
        ];
        return (
            <div className="gender-select text-warning mt-2">
                <div className="select-menu-list">
                    {genders.map((gender, counter) => {
                        return (
                            <a href="#/" onMouseDown={() => this.selectGender(gender)} key={counter}>
                                <span className="select-menu-item-text p-2">{gender}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        );
    }

    toggleDropdown = () => {
        this.setState((prevState) => ({
            showDropdown: !prevState.showDropdown
        }));
    };

    selectGender = (gender) => {
        this.setState({
            showDropdown: false
        });
        this.props.updateGender(gender);
    };

    render() {
        return (
            <div className={'animate__animated animate__headShake' + (!this.props.movie.title ? ' text-center' : '')}>
                {this.props.movie.title && this.renderMovie()}
                {!this.props.movie.title && <img className="img-fluid logo" src="/img/logo.png" alt="logo" />}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        preference: store.preference,
        characters: store.starwars.characters
    };
};

const mapDispatchToProps = {
    updateGender,
    updateSort
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
