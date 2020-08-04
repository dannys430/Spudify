import React from 'react';
import { Link, Route } from 'react-router-dom';

class ArtistContent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.id)
    
  }
  
  render() {

    if (!this.props.artist) {
      return null;
    }

    if (!this.props.artist.albums) {
      return null;
    }

    const artistAlbums = this.props.artist.albums

    const albumList = artistAlbums.map((album, id) => {
      return (
        <li className="artist-song-li" key={id}>
          <Link to={`/albums/${album.id}`}>
            {album.coverArtUrl
              ? <img className="album-photo" src={album.coverArtUrl}></img>
              : <div className="album-photo">
                <svg width="60" height="60" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
              </div>
            }
            {/* <div className="artist-album-photo">
              <svg width="60" height="60" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
            </div> */}
          </Link>
          <p><Link to={`/albums/${album.id}`}>{album.album_name}</Link></p>
        </li>
      )
    })

    const coverPhotoUrl = this.props.artist.coverPhotoUrl ? this.props.artist.coverPhotoUrl : null

    return (
      <div>
        <section style={{backgroundImage: `url(${coverPhotoUrl})`}} id="cover-photo" className="artist-section1">
          <div className="playlist-info-div">
            <span>
              <h2>ARTIST</h2>
              <h1>{this.props.artist.artist_name}</h1>
              <p>{this.props.artist.bio ? this.props.artist.bio : null}</p>
            </span>
          </div>
        </section>

        <section>
          
        </section>

        <section className="artist-section2">
          <div>
            <h1>Albums</h1>
            <ul>{albumList}</ul>
          </div>
        </section>
        
      </div>
    )
  }
}

export default ArtistContent;