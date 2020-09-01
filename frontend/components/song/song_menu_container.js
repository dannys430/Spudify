import React from 'react';
import {connect} from 'react-redux';

import {openModal} from '../../actions/modal_actions';
import {removePlaylistSong, requestPlaylists} from '../../actions/playlist_actions';


import SongMenu from './song_menu';

const mSTP = (state) => {
  return {
    queue: state.ui.mediaBar.queue
  }
}

const mDTP = (dispatch) => {
  return {
    // openModal: () => dispatch(openModal('add_to_playlist', secondarg)),
    openModal: (modalName, songToAdd) => dispatch(openModal(modalName, songToAdd)),
    removePlaylistSong: (playlistId, songId) => dispatch(removePlaylistSong(playlistId, songId)),
    requestPlaylists: () => dispatch(requestPlaylists())
  }
}

export default connect(mSTP, mDTP)(SongMenu);