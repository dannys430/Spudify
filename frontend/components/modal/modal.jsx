import React from 'react';

import PlaylistModalContainer from '../playlist/playlist_modal_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  switch(modal) {
    case 'playlist':
      component = <PlaylistModalContainer />;
      break;
    default:
      return null;
  }
  return (
    <div onClick={closeModal}>
      <div onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

export default Modal;