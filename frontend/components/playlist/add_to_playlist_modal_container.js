import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';

import {openModal} from '../../actions/modal_actions';
import {closeModal} from '../../actions/modal_actions';
import {requestPlaylists } from '../../actions/playlist_actions';


import AddToPlaylistModal from './add_to_playlist_modal'

const mSTP = (state) => {
  return {
    playlists: Object.values(state.entities.playlists)
  }
}


const mDTP = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal()),
    requestPlaylists: () => dispatch(requestPlaylists()),
    openModal:  () => dispatch(openModal('playlist'))
  }
}

export default connect(mSTP, mDTP)(AddToPlaylistModal)
