import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';

import {openModal} from '../../actions/modal_actions';
import {closeModal} from '../../actions/modal_actions';
import { requestPlaylist, requestPlaylists, addPlaylistSong } from '../../actions/playlist_actions';

import AddToPlaylistModal from './add_to_playlist_modal'

const mSTP = (state) => {
  return {
    playlists: state.entities.playlists,
    songToAdd: state.ui.modal.songToAdd,
    songName: state.ui.modal.songName,
    artist: state.ui.modal.artist
  }
}


const mDTP = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal()),
    requestPlaylists: () => dispatch(requestPlaylists()),
    // requestPlaylist: (id) => dispatch(requestPlaylist(id)), 
    addPlaylistSong: (playlistId, songId) => dispatch(addPlaylistSong(playlistId, songId)),
    openModal: (modalName, songToAdd, songName, artist) => dispatch(openModal(modalName, songToAdd, songName, artist))
  }
}

export default connect(mSTP, mDTP)(AddToPlaylistModal)
