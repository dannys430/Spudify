import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';

import SongForm from './song_form'

const mDTP = (dispatch) => {
  return {
    createSong: (song) => dispatch(createSong(song))
  }
}

export default connect(null, mDTP)(SongForm)
