import React from 'react';
import { Link } from 'react-router-dom';

import LeftNavContainer from '../leftnav/left_nav_container'
import MediaBarContainer from '../mediabar/media_bar_container';
import MainContentContainer from '../main_content/main_content_container';

class Home extends React.Component {
  // constructor(props) {
  //   super(props)

  // }

  // componentDidMount() {
  //   return this.props.requestPlaylists()
  // }
  
  render() {
    // debugger
    return (
      <div>
        <LeftNavContainer/>
        <MainContentContainer/>
        <MediaBarContainer/>
      </div>
    )
  }
}

export default Home;