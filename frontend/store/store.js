import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root';

const configureStore = (preloadedState) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore;