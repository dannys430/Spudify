import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar';

import {logout} from '../../actions/session';

const mSTP = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mSTP, mDTP)(NavBar)