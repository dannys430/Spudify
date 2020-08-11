import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

import { logout } from '../../actions/session';

import {requestAlbums} from '../../actions/album_actions'

const mSTP = (state) => {
  return {
    currentUser: state.session.currentUser,
    albums: state.entities.albums,
    history: state.ui.mediaBar.history
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestAlbums: () => dispatch(requestAlbums())
  }
}

export default connect(mSTP, mDTP)(Splash)