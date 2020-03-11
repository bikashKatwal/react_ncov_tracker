import { combineReducers } from 'redux';
import casesReducer from './casesReducer';

export default combineReducers({
	cases: casesReducer,
});
