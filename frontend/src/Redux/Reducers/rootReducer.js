import { combineReducers } from 'redux';

// import each reducer and add them to state.
import { championReducer, championDetailsReducer } from './championReducer';

// using the name of the reducer to seperate state containers
const state = {
	champions: championReducer,
	championDetails: championDetailsReducer,
};

export default combineReducers(state);
