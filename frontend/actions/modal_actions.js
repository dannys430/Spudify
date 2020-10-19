export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const openModal = (modalName, songToAdd=null, songName=null, artist=null) => ({
  type: OPEN_MODAL,
  modal: { modalName, songToAdd, songName, artist }
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})


