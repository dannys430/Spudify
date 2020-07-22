import { connect } from 'react-redux';

import ArtistContent from './artist_content';

import {requestArtist} from '../../actions/artist_actions';

const mSTP = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.id]
  }
}

const mDTP = (dispatch) => {
  return {
    requestArtist: (id) => dispatch(requestArtist(id))
  }
}

export default connect(mSTP, mDTP)(ArtistContent);
