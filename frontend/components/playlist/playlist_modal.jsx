import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlist_name: "",
      user_id: window.currentUser.id,
      photo: null,
      photoUrl: "",
      photoFile: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0]
    reader.onloadend = () => this.setState({photoUrl: reader.result, photoFile: file});

    if(file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({photoUrl: "", photoFile: null});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = new FormData();
    playlist.append('playlist[playlist_name]', this.state.playlist_name);
    playlist.append('playlist[user_id]', this.state.user_id);

    if (this.state.photoFile) {
      playlist.append('playlist[photo]', this.state.photoFile);
    }

    this.props.createNewPlaylist(playlist)
      .then(() => this.props.history.push(`/us`))
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Create new playlist</h1>

          <label>Playlist Name
            <input 
              type="text" 
              placeholder="New Playlist"
              onChange={this.update('playlist_name')}
            />
          </label>

          <label>Playlist Photo?
            <input type="file" onChange={(e) => this.handleFile(e)}/>
          </label>
          <img className="playlist-pic-preview" src={this.state.photoUrl} alt=""/>

          <button onClick={this.handleSubmit}>CREATE</button>

        </form>
      </div>
    )
  }
}

export default PlaylistModal;