import React from 'react';
import { connect } from 'react-redux';
// import { fetchNewSong } from '../../actions/song_actions';

import { openModal} from '../../actions/modal_actions';

import LeftNav from './left_nav';


const mSTP = ({})

const mDTP = (dispatch) => {
  return {
    // fetchNewSong: (id) => dispatch(fetchNewSong(id))
    otherForm: (
      <button className="create-playlist" onClick={() => dispatch(openModal('playlist'))}>
        Create Playlist
      </button>
    )
  }
}

export default connect(null, mDTP)(LeftNav);