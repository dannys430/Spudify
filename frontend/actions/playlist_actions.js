import { createPlaylistRequest, fetchPlaylist, fetchPlaylists, fetchPlaylistSongs } from '../utils/playlist_utils'

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST'
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS'
// export const RECEIVE_PLAYLIST_SONGS = 'RECEIVE_PLAYLIST_SONGS'

const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
})

const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
})

// const receivePlaylistSongs = (playlistSongs) => ({
//   type: RECEIVE_PLAYLIST_SONGS,
//   playlistSongs
// })

export const createPlaylist = (playlist) => dispatch => {
  return createPlaylistRequest(playlist)
    .then(
      playlist => dispatch(receivePlaylist(playlist))
    )
}

export const requestPlaylist = (id) => dispatch => {
  return fetchPlaylist(id)
    .then(
      playlist => dispatch(receivePlaylist(playlist))
    )
}

export const requestPlaylists = () => dispatch => {
  return fetchPlaylists()
    .then(
      playlists => dispatch(receivePlaylists(playlists))
    )
}

// export const requestPlaylistSongs = (id) => dispatch => {
//   return fetchPlaylistSongs(id)
//     .then(
//       playlistSongs => dispatch(receivePlaylistSongs(playlistSongs))
//     )
// }