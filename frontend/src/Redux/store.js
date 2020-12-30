import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;

// ###########################################################################
// workflow => create consonant => create action => create reducer

// if the work to be done is complex, create an action function and export it, then inside of the component that you want to
// dispatch the action in, import, then you would go ahead and dispatch the function from action including the arguments needed.
// from inside the action you'll want to dispatch the type and the payload.

// COMPONENT
// import addNumToCounter
// onClick(() => dispatch(addNumToCounter(num)))

// ACTION.JS
// import (ADD_NUMBER) from 'consonants/types'
//
// export const addNumToCounter = (num) => {return async dispatch=> {do somethin... dispatch({type: ADD_ NUMBER, payload: result}) }}
//
//
// REDUCER.JS
// switch(type)
//    case(ADD_NUMBER)
//      return{...state, counter: payload}
//
// ###########################################################################
