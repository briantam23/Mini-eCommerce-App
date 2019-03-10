import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const reducer = {};

const store = createStore(reducer, applyMiddleware(thunk, logger));


export default store;