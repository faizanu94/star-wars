import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
    FETCH_CHARACTERS_FAILED,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_MOVIES_FAILED,
    FETCH_MOVIES_SUCCESS,
    PROCESS_FETCH_CHARACTERS,
    PROCESS_FETCH_MOVIES
} from './types';

const BASE_URL = 'https://swapi.dev/api/films/';

export const fetchCharacters = (characters) => (dispatch) =>
    new Promise(function (resolve, reject) {
        dispatch({ type: PROCESS_FETCH_CHARACTERS });
        const map = characters.reduce((o, key) => ({ ...o, [key]: ajax.getJSON(`${key}?format=json`) }), {});
        forkJoin(map).subscribe(
            (response) => {
                dispatch({
                    type: FETCH_CHARACTERS_SUCCESS,
                    payload: {
                        characters: response
                    }
                });
                resolve();
            },
            (error) => {
                dispatch({
                    type: FETCH_CHARACTERS_FAILED,
                    payload: error.message
                });
                reject();
            }
        );
    });

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({ type: PROCESS_FETCH_MOVIES });

        ajax.getJSON(`${BASE_URL}?format=json`).subscribe(
            (response) => {
                dispatch({
                    type: FETCH_MOVIES_SUCCESS,
                    payload: {
                        movies: response.results
                    }
                });
            },
            (error) => {
                dispatch({
                    type: FETCH_MOVIES_FAILED,
                    payload: error.message
                });
            }
        );
    };
};
