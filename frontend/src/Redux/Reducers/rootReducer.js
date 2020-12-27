import { combineReducers } from 'redux';

// import each reducer and add them to state.
import championReducer from './championReducer';

// using the name of the reducer to seperate state containers
const state = {
	champions: championReducer,
};

export default combineReducers(state);
