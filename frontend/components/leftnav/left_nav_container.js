import React from 'react';
import { connect } from 'react-redux';
// import { fetchNewSong } from '../../actions/song_actions';

import LeftNav from './left_nav';

// const mDTP = (dispatch) => {
//   return {
//     fetchNewSong: (id) => dispatch(fetchNewSong(id))
//   }
// }

export default connect(null, null)(LeftNav);