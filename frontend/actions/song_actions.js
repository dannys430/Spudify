import { createSong } from '../utils/song_utils'

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG'

const receiveCurrentSong = (song) => ({
  type: RECEIVE_CURRENT_SONG,
  song
})

export const createNewSong = (song) => dispatch => {
  return createSong(song)
    .then(
      song => dispatch(receiveCurrentSong(song))
    )
}
