import { connect } from 'react-redux';
import { createNewPlaylist } from '../../actions/playlist_actions';

import PlaylistModal from './playlist_modal'

const mDTP = (dispatch) => {
  return {
    createNewPlaylist: (playlist) => dispatch(createNewPlaylist(playlist))
  }
}

export default connect(null, mDTP)(PlaylistModal)
