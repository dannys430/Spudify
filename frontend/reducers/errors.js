import {combineReducers} from 'redux';

import SessionErrors from './session_errors';

const ErrorsReducer = combineReducers({
  SessionErrors
})

export default ErrorsReducer;