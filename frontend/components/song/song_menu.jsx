import React from 'react';

class SongMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuShowing: false,
    }
  }

  // componentDidMount() {
  //   this.props.requestPlaylists()
  // }

  toggleMenu() {
    this.setState(prevState => ({ menuShowing: !prevState.menuShowing }))
  }

  handleQueue() {
    this.props.queue.push(this.props.song)
    this.setState({menuShowing: false})
  }

  handleModal() {
    this.props.openModal('add_to_playlist', this.props.song.id)
    this.setState({menuShowing: false})
  }

  handleRemoveSong() {
    // debugger
    // console.log(this.props.playlistId)
    // console.log(this.props.song.id)
    this.props.requestPlaylists()
    this.setState({menuShowing: false})
    this.props.removePlaylistSong(this.props.playlistId, this.props.song.id)
      .then(this.props.requestPlaylists())


    // if (this.props.songToAdd) {
    //   this.props.createPlaylist(this.state)
    //     .then(() => this.props.requestPlaylists())
    //     .then(() => this.props.addPlaylistSong(Object.keys(this.props.playlists)[Object.keys(this.props.playlists).length - 1], this.props.songToAdd))
    //     .then(() => this.props.requestPlaylists())
    //     .then(() => this.props.closeModal())
    //     .then(() => window.location.assign(`/#/playlists/${Object.keys(this.props.playlists)[Object.keys(this.props.playlists).length - 1]}`))
    // }
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
            {this.props.parentIsPlaylist ? <li onClick={() => this.handleRemoveSong()}>Remove from this Playlist</li> : null}
          </div>
        )}
        
      </div>
    )
  }
  
}

export default SongMenu;