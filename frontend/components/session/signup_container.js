import {connect} from 'react-redux';
import {createNewUser, login} from '../../actions/session';
import Signup from './signup'

const mSTP = (state) => {
  return {
    errors: state.errors.SessionErrors
  }
}

const mDTP = (dispatch) => {
  return {
    createNewUser: (createUser) => dispatch(createNewUser(createUser)),
    login: (user) => dispatch(login(user))
  }
}

export default connect(mSTP, mDTP)(Signup)
