import React from 'react';
import { Link } from 'react-router-dom';
import { RECEIVE_CURRENT_USER } from '../../actions/session';


class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // debugger
    // return this.props.requestUser(this.props.user.id)
    // return this.props.requestUsers()
    // return this.props.requestPlaylist(this.props.playlist.id)
    if (this.props.user === null) {
      return
    } else {
      return this.props.requestPlaylists()
    }
  }

  render() {

    const playlists = this.props.playlists

    const ul = []

    playlists.forEach((playlist) => {
      ul.unshift (
        <li className="playlist-index-li"><Link to={`/playlists/${playlist.id}`}><h1>{playlist.playlist_name}</h1></Link></li>
      )
    })

    return (
        <div className="playlist-index-div">
          {ul}
        </div>
    )
  }
}

export default PlaylistIndex;