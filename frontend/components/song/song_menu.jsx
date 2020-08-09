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

  handleQueue() {
    this.props.queue.push(this.props.song)
    console.log(this.props.queue)
  }

  handleModal() {
    this.props.openModal('add_to_playlist', this.props.song.id)
    this.setState({menuShowing: false})
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
            <li onClick={() => this.handleQueue()}>Add to Queue</li>
            <li onClick={() => this.handleModal()}>Add to Playlist</li>
            {this.props.parentIsPlaylist ? <li>Remove from this Playlist</li> : null}
          </div>
        )}
        
      </div>
    )
  }
  
}

export default SongMenu;