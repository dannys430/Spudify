import React from 'react';
import { Link } from 'react-router-dom';

import SongDiv from '../song/song_div';

class PlaylistContent extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    // return this.props.requestPlaylist(this.props.playlist.id)
    return this.props.requestPlaylist(this.props.match.params.id)
  }

  render() {
    // debugger
    if (!this.props.playlist) {
      return null;
    }

    if (!this.props.playlist.songs) {
      return null;
    }

    const playlistSongs = this.props.playlist.songs

    const songList = playlistSongs.map(song => {
      const ul = []
      ul.push(<SongDiv song={song}></SongDiv>)
      return ul
    })

    // debugger

    return (
      <div>
        <section className="pc-section1">
          <div className="album-photo"></div>
          <div className="playlist-info-div">
            <span>
              <h2>PLAYLIST</h2>
              <h1>{this.props.playlist.playlist_name}</h1>
              <h2>{this.props.playlist.user.name}</h2>
            </span>
          </div>
        </section>

        <section>
          <div>
            <h2>{songList}</h2>
          </div>
        </section>

      </div>
    )
  }
}

export default PlaylistContent;