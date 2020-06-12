import React from 'react';

import PlaylistContentContainer from '../playlist/playlist_content_container';

import { Route } from 'react-router-dom';



class MainContent extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  //   return this.props.requestPlaylists()
  // }

  render() {
    return (
      <div className="main-content-div" >
        {/* <PlaylistContentContainer props={this.props}/> */}
        <Route path="/playlists/:id" component={PlaylistContentContainer} />
      </div>
    )
  }
}

export default MainContent;