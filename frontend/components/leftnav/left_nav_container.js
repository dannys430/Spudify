import React from 'react';
import { connect } from 'react-redux';
// import { fetchSong } from '../../actions/song_actions';

import { openModal } from '../../actions/modal_actions';

import {requestUser} from '../../actions/user_actions';

import LeftNav from './left_nav';


const mSTP = (state, ownProps) => {
  // debugger
  return {
    // user: state.entities.users[79],
    // playlists: state.entities.PlaylistReducer
    // state,
    // ownProps
  }
}

const mDTP = (dispatch) => {
  return {
    // fetchSong: (id) => dispatch(fetchSong(id))
    // requestUser: (id) => dispatch(requestUser(id)),
    otherForm: (
      <button className="create-playlist" onClick={() => dispatch(openModal('playlist'))}>
        Create Playlist
      </button>
    ),
    openModal: () => dispatch(openModal('playlist'))
  }
}

export default connect(mSTP, mDTP)(LeftNav);