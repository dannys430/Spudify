import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

import { logout } from '../../actions/session';

import {requestAlbum, requestAlbums} from '../../actions/album_actions'
import {requestSong} from '../../actions/song_actions'

const mSTP = (state) => {
  return {
    currentUser: state.session.currentUser,
    albums: state.entities.albums,
    song: state.entities.songs,
    history: state.ui.mediaBar.history
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestAlbums: () => dispatch(requestAlbums()),
    requestAlbum: (id) => dispatch(requestAlbum(id)),
    requestSong: (id) => dispatch(requestSong(id))
  }
}

export default connect(mSTP, mDTP)(Splash)