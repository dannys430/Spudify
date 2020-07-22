import { RECEIVE_ARTIST } from '../actions/artist_actions'

const ArtistReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { [action.artist.id]: action.artist });
    default:
      return state;
  }
}

export default ArtistReducer;