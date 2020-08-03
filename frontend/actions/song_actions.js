import * as SongUtils from '../utils/song_utils'

export const RECEIVE_SONG = 'RECEIVE_SONG'
export const RECEIVE_SONGS = 'RECEIVE_SONGS'

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
})

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
})

export const createSong = (song) => dispatch => {
  return SongUtils.createSong(song)
    .then(
      song => dispatch(receiveSong(song))
    )
}

export const requestSong = (id) => dispatch => {
  return SongUtils.fetchSong(id)
    .then(
      song => dispatch(receiveSong(song))
    )
}

export const requestSongs = () => dispatch => {
  return SongUtils.fetchSongs()
    .then(
      songs => dispatch(receiveSongs(songs))
    )
}
