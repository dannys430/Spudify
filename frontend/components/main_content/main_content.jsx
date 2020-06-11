import React from 'react';

import PlaylistContentContainer from '../playlist/playlist_content_container';

class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content-div" >
        <PlaylistContentContainer />
      </div>
    )
  }
}

export default MainContent;