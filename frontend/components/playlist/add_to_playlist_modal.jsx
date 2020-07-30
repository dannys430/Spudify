import React from 'react';
import { Link } from 'react-router-dom';

class AddToPlaylistModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlist_name: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.user === null) {
      return
    } else {
      return this.props.requestPlaylists()
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createPlaylist(this.state)
      .then(() => this.props.requestPlaylists())
      .then(() => this.props.closeModal())
  }

  addSong() {
    console.log('apple')
    // this.props.openModal()
  }
  
  render() {

    const playlists = this.props.playlists

    const ul = []

    playlists.forEach((playlist, id) => {

      const songCount = playlist.songs 
                          ? playlist.songs.length !== 1 
                              ? `${playlist.songs.length} songs`
                              : `${playlist.songs.length} song`
                          : null

      ul.unshift(
        <div key={id}>  
            <Link to={`/playlists/${playlist.id}`}>
              <div className="add-to-playlist-modal-album-photo">
                <svg width="60" height="60" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
              </div>
            </Link>
            <li><p>{playlist.playlist_name}</p></li>
            <li><p>{songCount}</p></li>
        </div>
      )
    })

    const xIcon =   <div>
                      <svg width="150px" height="80px" viewBox="270 160 400 400">
                        <g>
                          <path d="M400,310 L540,450" fill="transparent" stroke="var(--white)" stroke-width="10px"></path>
                          <path d="M400,450 L540,310" fill="transparent" stroke="var(--white)" stroke-width="10px"></path>
                        </g>
                      </svg>
                    </div>

   
    
    return (
      <div className="add-to-playlist-modal">
        <form className="add-to-playlist-modal-form" onSubmit={this.handleSubmit}>
          <button onClick={() => this.props.closeModal()}>{xIcon}</button>
          <h1>Add to playlist</h1>
          <div className="add-to-playlist-modal-buttons-div">
            <button className="create-button" onClick={() => this.addSong()}>NEW PLAYLIST</button>
          </div>

          <div className="add-to-playlist-modal-playlists">
            {ul}
          </div>

        </form>
      </div>
    )
  }
}

export default AddToPlaylistModal;