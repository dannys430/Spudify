import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';

import {closeModal} from '../../actions/modal_actions';
import {requestPlaylists } from '../../actions/playlist_actions';


import PlaylistModal from './playlist_modal'

const mDTP = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal()),
    requestPlaylists: () => dispatch(requestPlaylists())
  }
}

export default connect(null, mDTP)(PlaylistModal)
