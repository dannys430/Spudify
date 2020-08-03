import { fetchArtist, fetchArtists } from '../utils/artist_utils'

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'

const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
})

const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
})

export const requestArtist = (id) => dispatch => {
  return fetchArtist(id)
    .then(
      artist => dispatch(receiveArtist(artist))
    )
}

export const requestArtists = () => dispatch => {
  return fetchArtists()
    .then(
      artists => dispatch(receiveArtists(artists))
    )
}