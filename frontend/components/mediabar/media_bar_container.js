import {connect} from 'react-redux';

import MediaBar from './media_bar';

import { requestPlaylist, requestPlaylists } from '../../actions/playlist_actions';

import { receiveCurrentSong, play, pause, receiveQueue, receiveDuration, receiveCurrentTime } from '../../actions/media_bar_actions'

const mSTP = (state, ownProps) => {
  return {
    // currentSong: new Audio(state.ui.mediaBar.currentSong),
    
    currentSong: state.ui.mediaBar.currentSong,
    playing: state.ui.mediaBar.playing,
    history: state.ui.mediaBar.history,
    queue: state.ui.mediaBar.queue,
    durationRaw: state.ui.mediaBar.durationRaw,
    duration: state.ui.mediaBar.duration,
    currentTimeRaw: state.ui.mediaBar.currentTimeRaw,
    currentTime: state.ui.mediaBar.currentTime,
    // playlist: state.entities.playlists[ownProps.match.params.id],
  }
}

const mDTP = (dispatch) => {
  return {
    requestPlaylist: (id) => dispatch(requestPlaylist(id)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    receiveQueue: (songs) => dispatch(receiveQueue(songs)),
    receiveDuration: () => dispatch(receiveDuration()),
    receiveCurrentTime: () => dispatch(receiveCurrentTime())
  }
}

export default connect(mSTP, mDTP)(MediaBar);