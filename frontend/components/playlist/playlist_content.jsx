import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistContent extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    // debugger
    // return this.props.requestPlaylist(this.props.playlist.id)
    return this.props.requestPlaylist(this.props.match.params.id)
  }


  render() {

    if (!this.props.playlist) {
      return null;
    }

    const playlistSongs = this.props.playlist.songs

    const songList = playlistSongs.map(song => {
      const ul = []
      ul.push(
        // <li>{song.song_name}</li>
      <li><Link to={`/playlists/${this.props.playlist.id}/songs/${song.id}`}><h2>{song.song_name}</h2></Link></li>

      )
      return ul
    })

    return (
      <div>
        <section className="pc-section1">
          <div className="album-photo"></div>
          <div>
            <h2>PLAYLIST</h2>
            <h1>{this.props.playlist.playlist_name}</h1>
            <h2>{this.props.playlist.user.name}</h2>
            <h2>{songList}</h2>
            

          </div>
        </section>

        <section>
          <div>

          </div>
        </section>

      </div>
    )
  }
}

export default PlaylistContent;