export const createPlaylistRequest = (playlist) => {
  return $.ajax({
    url: `/api/playlists`,
    method: 'POST',
    data: {playlist}
  })
}
