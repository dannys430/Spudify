import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';

import PlaylistModal from './playlist_modal'

const mDTP = (dispatch) => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  }
}

export default connect(null, mDTP)(PlaylistModal)
