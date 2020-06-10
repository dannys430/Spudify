import { createPlaylistRequest } from '../utils/playlist_utils'

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST'

const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
})

export const createPlaylist = (playlist) => dispatch => {
  return createPlaylistRequest(playlist)
    .then(
      playlist => dispatch(receivePlaylist(playlist))
    )
}
