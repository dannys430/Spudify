import { connect } from 'react-redux';

import AlbumContent from './album_content';

import { requestAlbum, requestAlbums } from '../../actions/album_actions';

import { receiveCurrentSong, play, pause, receiveQueue, receiveDuration, receiveCurrentTime } from '../../actions/media_bar_actions'


const mSTP = (state, ownProps) => {
  // debugger
  return {
    album: state.entities.albums[ownProps.match.params.id]
  }
}

const mDTP = (dispatch) => {
  return {
    requestAlbum: (id) => dispatch(requestAlbum(id)),
    receiveQueue: (songs) => dispatch(receiveQueue(songs)),
  }
}

export default connect(mSTP, mDTP)(AlbumContent);