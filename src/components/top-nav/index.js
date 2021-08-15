import React, { Component } from 'react';
import './styles.css';

class TopNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <div className="container clearfix">
                    <a
                        href="https://github.com/faizanu94/starwars"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="logo clearfix float-left d-flex"
                    >
                        <img className="logo-img" src="/img/logo.png" alt="logo" />
                        <div className="logo-text">
                            <h4>Star Wars</h4>
                            <p className="text-dark d-inline-block">Star Wars movies data fetched from https://swapi.dev/</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default TopNav;
