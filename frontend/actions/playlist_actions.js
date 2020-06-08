import { createPlaylist } from '../utils/playlist_utils'

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST'

const receiveCurrentPlaylist = (playlist) => ({
  type: RECEIVE_CURRENT_PLAYLIST,
  playlist
})

export const createNewPlaylist = (playlist) => dispatch => {
  return createPlaylist(playlist)
    .then(
      playlist => dispatch(receiveCurrentPlaylist(playlist))
    )
}
