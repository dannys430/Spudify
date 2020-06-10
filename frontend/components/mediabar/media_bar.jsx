import React from 'react';

class MediaBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    }
  }

 
  
  render() {
    return(
      <footer className="mediabar">
        <div>
          {/* <audio src={}></audio>
          <img className="play-button" src={window.playURL} alt=""/> */}
          
        </div>
      </footer>
    )
  }
}

export default MediaBar;