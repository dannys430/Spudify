export const createPlaylistRequest = (playlist) => {
  return $.ajax({
    url: `/api/playlists`,
    method: 'POST',
    data: {playlist}
  })
}

export const fetchPlaylist = (id) => {
  // debugger
  return $.ajax({
    url: `/api/playlists/${id}`,
    method: 'GET'
  })
}

export const fetchPlaylists = () => {
  // debugger
  return $.ajax({
    url: `/api/playlists/`,
    method: 'GET'
  })
}

export const createPlaylistSong = (playlistId, songId) => {
  // debugger
  return $.ajax({
    url: `/api/playlists/${playlistId}/addsong/${songId}`,
    method: 'POST'
  })
}

export const deletePlaylistSong = (playlistId, songId) => {
  return $.ajax({
    url: `/api/playlists/${playlistId}/removesong/${songId}`,
    method: 'DELETE'
  })
}

// export const fetchPlaylistSongs = (id) => {
//   // debugger
//   return $.ajax({
//     url: `/api/playlists/${id}/songs/`,
//     method: 'GET'
//   })
// }
