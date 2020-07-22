import { fetchAlbum, fetchAlbums } from '../utils/album_utils'

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM'
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
})

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
})

export const requestAlbum = (id) => dispatch => {
  return fetchAlbum(id)
    .then(
      album => dispatch(receiveAlbum(album))
    )
}

export const requestAlbums = () => dispatch => {
  return fetchAlbums()
    .then(
      albums => dispatch(receiveAlbums(albums))
    )
}
