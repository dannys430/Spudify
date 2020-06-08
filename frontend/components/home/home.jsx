import React from 'react';
import { Link } from 'react-router-dom';

import PlaylistModalContainer from '../playlist/playlist_modal_container';

class Home extends React.Component {
  render() {
    return (
      <div>
        <PlaylistModalContainer />
      </div>
    )
  }
}

export default Home;