import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session';
import Signup from './signup'

const mDTP = (dispatch) => {
  return {
    createNewUser: (createUser) => dispatch(createNewUser(createUser))
  }
}

export default connect(null, mDTP)(Signup)