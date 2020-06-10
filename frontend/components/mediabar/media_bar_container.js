import React from 'react';
import { connect } from 'react-redux';
import { fetchNewSong } from '../../actions/song_actions';

import MediaBar from './media_bar';

const mDTP = (dispatch) => {
  return {
    fetchNewSong: (id) => dispatch(fetchNewSong(id))
  }
}

export default connect(null, mDTP)(MediaBar);