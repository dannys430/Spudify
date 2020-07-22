import { RECEIVE_SONG, RECEIVE_SONGS } from '../actions/song_actions'

const SongReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SONG:
      return Object.assign({}, state, { [action.type.id]: action.type });
    case RECEIVE_SONGS:
      return action.songs
    default:
      return state;
  }
}

export default SongReducer;