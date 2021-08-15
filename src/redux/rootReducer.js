import { combineReducers } from 'redux';
import preference from './preference/reducer';
import starwars from './starwars/reducer';

export default combineReducers({
    starwars,
    preference
});
