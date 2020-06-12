import React from 'react';
import {connect} from 'react-redux';

import PlaylistContent from './playlist_content';

import { requestPlaylist, requestPlaylists } from '../../actions/playlist_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    playlist: state.entities.playlists[ownProps.match.params.id],
    // playlists: state.entities.playlists
  }
}

const mDTP = (dispatch) => {
  return {
    requestPlaylist: (id) => dispatch(requestPlaylist(id)),
    // requestPlaylists: () => dispatch(requestPlaylists())
  }
}

export default connect(mSTP, mDTP)(PlaylistContent);