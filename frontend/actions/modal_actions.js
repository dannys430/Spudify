export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const openModal = (modalName, songToAdd=null) => ({
  type: OPEN_MODAL,
  modal: { modalName, songToAdd }
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})


