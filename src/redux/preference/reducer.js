import { UPDATE_GENDER, UPDATE_MOVIE, UPDATE_SORT } from './types';

const initialState = {
    movie: {},
    gender: '',
    sort: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        case UPDATE_GENDER:
            return {
                ...state,
                gender: action.payload
            };
        case UPDATE_SORT:
            return {
                ...state,
                sort: action.payload
            };
        default:
            return state;
    }
}
