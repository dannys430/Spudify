import React from 'react';
import {connect} from 'react-redux';
import MainContent from './main_content';

import { requestPlaylists } from '../../actions/playlist_actions';

// const mSTP = (state) => {
//   return {
//     playlists: state.entities.playlists
//   }
// }

// const mDTP = (dispatch) => {
//   return {
//     requestPlaylists: () => dispatch(requestPlaylists())
//   }
// }


export default connect(null, null)(MainContent);
