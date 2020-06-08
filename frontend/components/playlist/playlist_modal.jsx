import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlist_name: "",
      user_id: ""
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
    this.props.createNewPlaylist(this.state)
    .then(() => this.props.history.push(`/`))
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

          <button onClick={this.handleSubmit}>CREATE</button>
          
        </form>
      </div>
    )
  }
}

export default PlaylistModal;