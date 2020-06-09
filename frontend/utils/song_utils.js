export const createSong = (song) => {
  return $.ajax({
    url: `/api/songs`,
    method: 'POST',
    data: song,
    contentType: false,
    processData: false
  })
}
