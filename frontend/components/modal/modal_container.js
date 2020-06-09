import { connect } from 'react-redux';

import {openModal, closeModal} from '../../actions/modal_actions';

mSTP = (state) => {
  return {
    modal: state.ui.ModalReducer
  }
}

const mDTP = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
}


//modal reducer
//modal action w 2 action creators (open/close)
//modal comp that houses all modals (incl playlist)

//ui reducer