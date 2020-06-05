import {combineReducers} from 'redux';
import SessionReducer from './session';
import ErrorsReducer from './errors';

const RootReducer = combineReducers({
  session: SessionReducer,        // state.session will point to return value of session reducer
  errors: ErrorsReducer,          // etc.
  // entities: EntitiesReducer
})

export default RootReducer;

