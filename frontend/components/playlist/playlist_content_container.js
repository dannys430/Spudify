import React from 'react';
import {connect} from 'react-redux';

import PlaylistContent from './playlist_content';

import { requestPlaylist } from '../../actions/playlist_actions';

const mSTP = (state, ownProps) => {
  debugger
  return {
    playlist: state.entites.playlists[ownProps.match.params.id]
  }
}

const mDTP = (dispatch) => {
  return {
    requestPlaylist: (id) => dispatch(requestPlaylist(id))
  }
}

export default connect(mSTP, mDTP)(PlaylistContent);