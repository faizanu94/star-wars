import { UPDATE_GENDER, UPDATE_MOVIE, UPDATE_SORT } from './types';

export const updateMovie = (movie) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_MOVIE,
            payload: movie
        });
    };
};

export const updateGender = (gender) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_GENDER,
            payload: gender
        });
    };
};

export const updateSort = (sort) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_SORT,
            payload: sort
        });
    };
};
