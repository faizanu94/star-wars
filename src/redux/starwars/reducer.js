import {
    FETCH_CHARACTERS_FAILED,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_MOVIES_FAILED,
    FETCH_MOVIES_SUCCESS,
    PROCESS_FETCH_CHARACTERS,
    PROCESS_FETCH_MOVIES
} from './types';

export const initialState = {
    processing: false,
    movies: [],
    characters: {},
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PROCESS_FETCH_MOVIES:
            return {
                ...state,
                processing: true,
                error: null
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: [...action.payload.movies],
                processing: false,
                error: null
            };
        case PROCESS_FETCH_CHARACTERS:
            return {
                ...state,
                processing: true,
                error: null
            };
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: { ...state.characters, ...action.payload.characters },
                processing: false,
                error: null
            };
        case FETCH_MOVIES_FAILED:
            return {
                ...state,
                processing: false,
                error: action.payload
            };
        case FETCH_CHARACTERS_FAILED:
            return {
                ...state,
                processing: false,
                error: action.payload
            };
        default:
            return state;
    }
}
