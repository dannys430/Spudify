import {connect} from 'react-redux';
import {login} from '../../actions/session';
import Login from './login';

const mSTP = (state) => {
  return {
    errors: state.errors.SessionErrors
  }
}

const mDTP = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  }
}

export default connect(mSTP, mDTP)(Login)