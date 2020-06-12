import React from 'react';
import { Link } from 'react-router-dom';


class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // debugger
    // return this.props.requestUser(this.props.user.id)
    // return this.props.requestUsers()
    // return this.props.requestPlaylist(this.props.playlist.id)
    return this.props.requestPlaylists()
  }

  render() {

    const playlists = this.props.playlists

    const toDisplay = playlists.map(playlist => {
      const ul = []
      ul.push (
        <li className="playlist-index-li"><Link to={`/playlists/${playlist.id}`}><h1>{playlist.playlist_name}</h1></Link></li>
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