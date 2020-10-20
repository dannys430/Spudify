import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlist_name: this.props.songName ? `${this.props.songName} - ${this.props.artist}` : ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.props.songToAdd) {
      this.props.createPlaylist(this.state)
        .then(() => this.props.requestPlaylists())
        .then(() => this.props.addPlaylistSong(Object.keys(this.props.playlists)[Object.keys(this.props.playlists).length - 1], this.props.songToAdd))
        .then(() => this.props.requestPlaylists())
        .then(() => this.props.closeModal())
        .then(() => window.location.assign(`/#/playlists/${Object.keys(this.props.playlists)[Object.keys(this.props.playlists).length - 1]}`))
    } else {
      this.props.createPlaylist(this.state)
        .then(() => this.props.requestPlaylists())
        .then(() => this.props.closeModal())
    }
  }
  
  render() {

    const xIcon =   <div>
                      <svg width="150px" height="80px" viewBox="270 160 400 400">
                        <g>
                          <path d="M400,310 L540,450" fill="transparent" stroke="var(--white)" stroke-width="10px"></path>
                          <path d="M400,450 L540,310" fill="transparent" stroke="var(--white)" stroke-width="10px"></path>
                        </g>
                      </svg>
                    </div>

    return (
      <div className="playlist-modal">
        <form className="playlist-modal-form" onSubmit={this.handleSubmit}>
          <button onClick={() => this.props.closeModal()}>{xIcon}</button>
          <h1>Create new playlist</h1>

          <div className="playlist-modal-input">
            <h2>Playlist Name</h2>
              <input
                type="text"
                placeholder="New Playlist"
                defaultValue={this.props.songName ? `${this.props.songName} - ${this.props.artist}` : null}
                onChange={this.update('playlist_name')}
              />
          </div>


          <div className="playlist-modal-buttons-div">
            <button className="cancel-button" onClick={() => this.props.closeModal()}>CANCEL</button>
            <button className="create-button" onClick={this.handleSubmit}>CREATE</button>
          </div>

        </form>
      </div>
    )
  }
}

export default PlaylistModal;