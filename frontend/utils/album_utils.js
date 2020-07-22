
export const fetchAlbum = (id) => {
  // debugger
  return $.ajax({
    url: `/api/albums/${id}`,
    method: 'GET'
  })
}

export const fetchAlbums = () => {
  // debugger
  return $.ajax({
    url: `/api/albums/`,
    method: 'GET'
  })
}
