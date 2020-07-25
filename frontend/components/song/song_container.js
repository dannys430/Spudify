import { connect } from 'react-redux';

import Song from './song';

import { receiveCurrentSong, play, pause, receiveQueue, receiveDuration, receiveCurrentTime } from '../../actions/media_bar_actions'


const mSTP = (state, ownProps) => {
  // debugger
  return {
    // currentSong: new Audio(state.ui.mediaBar.currentSong),

    currentSong: state.ui.mediaBar.currentSong,
    playing: state.ui.mediaBar.playing,
    history: state.ui.mediaBar.history,
    queue: state.ui.mediaBar.queue,
    duration: state.ui.mediaBar.duration,
    currentTime: state.ui.mediaBar.currentTime,
  }
}

const mDTP = (dispatch) => {
  return {
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    receiveQueue: (songs) => dispatch(receiveQueue(songs)),
    receiveDuration: () => dispatch(receiveDuration()),
    receiveCurrentTime: () => dispatch(receiveCurrentTime())
  }
}

export default connect(mSTP, mDTP)(Song);