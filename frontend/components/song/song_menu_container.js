import React from 'react';
import {connect} from 'react-redux';

import {openModal} from '../../actions/modal_actions';

import SongMenu from './song_menu';

const mDTP = (dispatch) => {
  return {
    openModal: () => dispatch(openModal('add_to_playlist'))
  }
}

export default connect(null, mDTP)(SongMenu);