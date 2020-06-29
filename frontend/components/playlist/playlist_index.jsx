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

    const toDisplay = playlists.map((playlist, i) => {
      const ul = []
      ul.push (
        <li key={i} className="playlist-index-li"><Link to={`/playlists/${playlist.id}`}><h1>{playlist.playlist_name}</h1></Link></li>
      )
      return ul
      
    })

    return (
      <div className="playlist-index-div">
        {toDisplay}
      </div>
    )
  }
}

export default PlaylistIndex;