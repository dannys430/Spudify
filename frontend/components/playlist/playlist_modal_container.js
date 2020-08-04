import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';

import {closeModal} from '../../actions/modal_actions';
import {requestPlaylists, addPlaylistSong } from '../../actions/playlist_actions';


import PlaylistModal from './playlist_modal'

const mSTP = (state) => {
  return {
    songToAdd: state.ui.modal.songToAdd,
    playlists: state.entities.playlists
  }
}

const mDTP = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal()),
    requestPlaylists: () => dispatch(requestPlaylists()),
    addPlaylistSong: (playlistId, songId) => dispatch(addPlaylistSong(playlistId, songId)),
  }
}

export default connect(mSTP, mDTP)(PlaylistModal)
