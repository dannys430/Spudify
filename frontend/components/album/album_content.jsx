import React from 'react'
import { Link, Route } from 'react-router-dom';

import SongContainer from '../song/song_container';

class AlbumContent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAlbum(this.props.match.params.id)
  }

  render() {

    if (!this.props.album) {
      return null;
    }

    if (!this.props.album.songs) {
      return null;
    }

    const albumSongs = this.props.album.songs
    this.props.receiveQueue(albumSongs)


    const songList = albumSongs ? albumSongs.map((song, id) => {
      return (
        <SongContainer key={id} song={song} />
        
        // <li className="song-li" key={id}>
        //   <h1>{song.song_name}</h1>
        //   <p><Link to={`/artists/${this.props.album.artist.id}`}>{this.props.album.artist.artist_name}</Link></p>
          
        // </li>
      )
    }) : null;

    return (
      <div>
        <section className="pc-section1">
          {this.props.album.coverArtUrl 
            ? <img className="album-photo" src={this.props.album.coverArtUrl}></img>
            : <div className="album-photo">
                <div className="album-photo-music-note">
                  <svg width="60" height="60" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
                </div>
              </div>
          }
          
          <div className="playlist-info-div">
            <span>
              <h2>ALBUM</h2>
              <h1>{this.props.album.album_name}</h1>
              <h2><Link to={`/artists/${this.props.album.artist.id}`}>{this.props.album.artist.artist_name}</Link> • {this.props.album.year.slice(0, 4)}</h2>
            </span>
          </div>
        </section>

        <section className="pc-section2">
          <div>
            <ul>{songList}</ul>
          </div>
        </section>

      </div>
    )
  }
}

export default AlbumContent;