
export const fetchArtist = (id) => {
  // debugger
  return $.ajax({
    url: `/api/artists/${id}`,
    method: 'GET'
  })
}
