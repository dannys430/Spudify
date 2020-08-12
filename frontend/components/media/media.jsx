import React from 'react';
import { Link, Route } from 'react-router-dom';

class Media extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLink() {
    if (this.props.artist) {
      return (
        `/artists/${this.props.artist.id}`
      )
    } else if (this.props.album) {
      return (
        `/albums/${this.props.album.id}`
      )
    } else if (this.props.playlist) {
      return (
        `/playlists/${this.props.playlist.id}`
      )
    } else if (this.props.song) {
      return (
        `/albums/${this.props.song.album_id}`
      )
    }
  }
  
  render() {

    const artist = this.props.artist ? this.props.artist : null
    const album = this.props.album ? this.props.album : null
    const playlist = this.props.playlist ? this.props.playlist : null
    const song = this.props.song ? this.props.song : null

    const media = () => {
      if(artist) {
        return (
          artist.profilePhotoUrl
            ? <div>
                <div className="artist-profile-photo-image">
                  <img src={artist.profilePhotoUrl} alt="artist" />
                </div>
                <h2>{artist.artist_name}</h2>
                <p>Artist</p>
              </div>
            : <div>
                <div className="artist-profile-photo-icon">
                  <svg width="50" height="50" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
                </div>
                <h2>{artist.artist_name}</h2>
                <p>Artist</p>
              </div>
        )
      } else if(album) {
        return (
          album.coverArtUrl
            ? <div>
                <div className="album-cover-art-icon">
                  <img src={album.coverArtUrl} alt="album" />
                </div>
                <h2>{album.album_name}</h2>
                <p>Album</p>
              </div>
            : <div>
                <div className="album-cover-art-icon">
                  <svg width="50" height="50" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
                </div>
                <h2>{album.album_name}</h2>
                <p>Album</p>
              </div>
        )
      } else if(playlist) {
        return (
          <div>
            <div className="album-cover-art-icon">
              <svg width="50" height="50" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
            </div>
            <h2>{playlist.playlist_name}</h2>
            <p>By {playlist.user.name}</p>
          </div>
        )
      } else if(song) {
        return (
          <div>
            <div className="album-cover-art-icon">
              <svg width="50" height="50" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
            </div>
            <h2>{song.song_name}</h2>
            <p>{song.artist.artist_name}</p>
          </div>
        )
      }
    }
            
    
    return (
      <div>
        <Link to={() => this.handleLink()}>
          <div className="media">
            <div className="media-content">
              {media()}
            </div>
          </div>
        </Link>
      </div>
    )
  }
  
}

export default Media;