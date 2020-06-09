import React from 'react';
import { Link } from 'react-router-dom';

import LeftNavContainer from '../leftnav/left_nav_container'
// import PlaylistModalContainer from '../playlist/playlist_modal_container';
import MediaBarContainer from '../mediabar/media_bar_container';

class Home extends React.Component {
  render() {
    return (
      <div>
        <LeftNavContainer />
        {/* <PlaylistModalContainer /> */}
        <MediaBarContainer />
      </div>
    )
  }
}

export default Home;