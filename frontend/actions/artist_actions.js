import { fetchArtist } from '../utils/artist_utils'

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'

const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
})

export const requestArtist = (id) => dispatch => {
  return fetchArtist(id)
    .then(
      artist => dispatch(receiveArtist(artist))
    )
}
