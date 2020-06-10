import { connect } from 'react-redux';
import { createNewSong } from '../../actions/song_actions';

import SongForm from './song_form'

const mDTP = (dispatch) => {
  return {
    createNewSong: (song) => dispatch(createNewSong(song))
  }
}

export default connect(null, mDTP)(SongForm)
