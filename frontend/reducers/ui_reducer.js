import { combineReducers } from 'redux';

import ModalReducer from './modal_reducer';
import MediaBarReducer from './media_bar_reducer'

const UIReducer = combineReducers({
  modal: ModalReducer,
  mediaBar: MediaBarReducer
});

export default UIReducer;



