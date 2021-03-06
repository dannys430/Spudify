import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions'

const AlbumReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.album.id]: action.album });
    case RECEIVE_ALBUMS:
      return action.albums;
    default:
      return state;
  }
}

export default AlbumReducer;