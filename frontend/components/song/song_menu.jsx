import React from 'react';

class SongMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuShowing: false,
    }
  }

  toggleMenu() {
    this.setState(prevState => ({ menuShowing: !prevState.menuShowing }))
  }

  render() {

    const songDivMenuButtonStyles = {}
    if (this.props.currentSong == this.props.song || this.state.menuShowing) {
      songDivMenuButtonStyles.display = 'initial'
    }


    return (
      <div className="song-menu">
        <div onClick={() => this.toggleMenu()} style={songDivMenuButtonStyles} id="song-div-menu-button" className="song-div-menu-button">•••</div>
        {this.state.menuShowing && (
          <div className="song-menu-dropdown">
            <li>Add to Queue</li>
            <li onClick={() => this.props.openModal()}>Add to Playlist</li>
            <li>Remove from this Playlist</li> {/* only if within PlaylistContent*/}
          </div>
        )}
        
      </div>
    )
  }
  
}

export default SongMenu;