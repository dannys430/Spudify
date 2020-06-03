import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session';
import Signup from './signup'

const mSTP = (state) => {
  return {
    errors: state.errors.SessionErrors
  }
}

const mDTP = (dispatch) => {
  return {
    createNewUser: (createUser) => dispatch(createNewUser(createUser))
  }
}

export default connect(mSTP, mDTP)(Signup)
