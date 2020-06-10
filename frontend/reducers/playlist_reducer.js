import { RECEIVE_PLAYLIST } from '../actions/playlist_actions'

const PlaylistReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, {[action.type.id]: action.type});
    default:
      return state;
  }
}

export default PlaylistReducer;