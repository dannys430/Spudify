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
  
  render() {

    const playlists = this.props.playlists

    const ul = []

    playlists.forEach((playlist, id) => {
      ul.unshift(
        <li key={id} className="playlist-index-li"><Link to={`/playlists/${playlist.id}`}><h1>{playlist.playlist_name}</h1></Link></li>
      )
    })

    const xIcon =  <div>
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
          <div className="playlist-modal-buttons-div">
            <button className="create-button" onClick={() => this.props.openModal()}>NEW PLAYLIST</button>
          </div>

          {/* {ul} */}

        </form>
      </div>
    )
  }
}

export default AddToPlaylistModal;