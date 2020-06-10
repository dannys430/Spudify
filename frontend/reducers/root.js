import {combineReducers} from 'redux';

import EntitiesReducer from './entities_reducer'
import SessionReducer from './session';
import ErrorsReducer from './errors';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,        // state.session will point to return value of session reducer
  errors: ErrorsReducer,          // etc.
  entities: EntitiesReducer,
  ui: UIReducer,
})

export default RootReducer;

