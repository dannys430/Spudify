import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlist_name: "",
      user_id: "",
      // photoURL: "",
      // photo: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  // handleFile(e) {
  //   let file = e.target.files[0]
  //   this.setState({photo: file})
  // }

  handleSubmit(e) {
    e.preventDefault()
    let playlist = new FormData()
    // playlist.append('playlist[playlist_name]', this.state.playlist_name )
    // playlist.append('playlist[user_id]', this.state.user_id )
    // playlist.append('playlist[photo]', this.state.photo )

    this.props.createNewPlaylist(this.state)
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

          {/* <label>Description
            <input
              type="text"
              placeholder="Description"
              onChange={this.update('description')}
            />
          </label> */}

         

          <label>User Id
            <input
              type="text"
              placeholder="User Id"
              onChange={this.update('user_id')}
            />
          </label>

          {/* <input type="file" onChange={(e) => this.handleFile(e)}/> */}

          <button onClick={this.handleSubmit}>CREATE</button>

          
        </form>
      </div>
    )
  }
}

export default PlaylistModal;