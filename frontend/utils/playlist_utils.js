export const createPlaylist = (playlist) => {
  return $.ajax({
    url: `/api/playlists`,
    method: 'POST',
    data: { playlist }
  })
}
