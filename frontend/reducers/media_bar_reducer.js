import {
  RECEIVE_PREV_SONG, 
  RECEIVE_CURRENT_SONG, 
  RECEIVE_NEXT_SONG,
  RECEIVE_QUEUE,
  PLAY,
  PAUSE,
  RECEIVE_DURATION,
  RECEIVE_CURRENT_TIME
} from '../actions/media_bar_actions';

const initialState = {
  playing: false,
  currentSong: null,
  history: [],
  queue: [],
  duration: '0:00',
  currentTime: '0:00'
}

// const formatTime = (time) => {
//   return (!isNaN(time)) ? (`${Math.floor(time / 60)}:${Math.floor(time % 60)}`) : null
// }

String.prototype.toMMSS = function () {
  var sec_num = parseInt(this, 10);
  var mins = Math.floor((sec_num) / 60);
  var secs = sec_num - (mins * 60);
  if (secs < 10) { secs = "0" + secs; }
  return mins + ":" + secs;
}

const MediaBarReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_PREV_SONG:
      !newState.history.includes(action.song) ? newState.history.push(action.song) : null
      return newState;
    case RECEIVE_CURRENT_SONG:
      newState.currentSong = action.song
      return newState;
    case RECEIVE_NEXT_SONG:
      newState.queue.unshift(action.song)
      return newState;
    case RECEIVE_QUEUE:
      const songs = Object.values(action.songs)
      songs.forEach(song => {
        if(!newState.queue.includes(song)) {
          newState.queue.push(song);
        }
      })
      return newState
    case PLAY:
      newState.playing = true
      return newState;
    case PAUSE:
      newState.playing = false
      return newState;
    case RECEIVE_DURATION:
      newState.duration = newState.currentSong
        ? `${document.getElementById('media-bar').duration}`.toMMSS()
        : null
      return newState;
    case RECEIVE_CURRENT_TIME:
      newState.currentTime = newState.currentSong
        ? `${document.getElementById('media-bar').currentTime}`.toMMSS()
        : null
      return newState;
    default:
      return state;
  }
}

export default MediaBarReducer;