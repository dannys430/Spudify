import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions'

const initialState = {
  modalName: null,
  songToAdd: null
}

const ModalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default ModalReducer;

