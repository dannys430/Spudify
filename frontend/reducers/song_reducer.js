import { RECEIVE_CURRENT_SONG } from '../actions/song_actions'

const SongReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return Object.assign({}, state, { [action.type.id]: action.type });
    default:
      return state;
  }
}

export default SongReducer;