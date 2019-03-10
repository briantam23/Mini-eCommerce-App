import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import productsReducer from './reducers/products';


const store = createStore(productsReducer, applyMiddleware(thunk, logger));


export default store;