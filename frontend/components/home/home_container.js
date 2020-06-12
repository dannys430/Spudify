import React from 'react';
import { connect } from 'react-redux';
import Home from './home'

import { requestPlaylist, requestPlaylists } from '../../actions/playlist_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    // playlists: state.entities.playlists
  }
}

const mDTP = (dispatch) => {
  // debugger
  return {
    // requestPlaylists: () => dispatch(requestPlaylists())
  }
}

export default connect(null, null)(Home);

