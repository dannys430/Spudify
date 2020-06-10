import React from 'react';
import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index'

import { requestUser, requestUsers } from '../../actions/user_actions';
import { requestPlaylist, requestPlaylists } from '../../actions/playlist_actions';

const mSTP = (state) => {
  return {
    user: state.session.currentUser,
    playlists: Object.values(state.entities.playlists)
  }
}

const mDTP = (dispatch) => {
  return {
    requestUser: (id) => dispatch(requestUser(id)),
    requestUsers: () => dispatch(requestUsers()),
    requestPlaylist: (id) => dispatch(requestPlaylist(id)),
    requestPlaylists: () => dispatch(requestPlaylists())
  }
}

export default connect(mSTP, mDTP)(PlaylistIndex);
