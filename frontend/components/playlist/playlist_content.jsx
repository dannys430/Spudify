import React from 'react';
import { Link } from 'react-router-dom';

import SongDiv from '../song/song_div';

class PlaylistContent extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentSong: null,
      playing: false,
      history: []
    }
  }

  componentDidMount() {
    // return this.props.requestPlaylist(this.props.playlist.id)
    return this.props.requestPlaylist(this.props.match.params.id)
  }

  componentDidUpdate(previousProps, previousState) {
    // console.log(this.state)
    if (this.state.currentSong !== previousState.currentSong) {
      let url;
      // switch (this.state.currentSong.song_name) {
      //   case "obsessedtest":
      //     url = this.state.currentSong.songUrl
      //     break;
      //   // case "Booting Up":
      //   //   url = bootingUp
      //   //   break;
      //   default:
      //     break;
      // }
      // if (url) {
        this.player.src = this.state.currentSong.songUrl;
        this.player.play()
        this.setState({playing: true})
        this.state.history.push(this.state.currentSong)
        console.log(this.state)
      // }
    }
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
      return (
        <li className="song-li"
          // key={song.id} 
          onDoubleClick={() => this.setState({currentSong: song})}
        >
          <h1>{song.song_name}</h1>
          <p>{song.artist.artist_name} • {song.album.album_name}</p>
          
        </li>
      )
    });

    return (
      <div>
        <section className="pc-section1">
          <div className="album-photo">
            <svg width="60" height="60" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f" fill-rule="evenodd"></path></svg>
          </div>
          <div className="playlist-info-div">
            <span>
              <h2>PLAYLIST</h2>
              <h1>{this.props.playlist.playlist_name}</h1>
              <h2>{this.props.playlist.user.name}</h2>
            </span>
          </div>
        </section>

        <section className="pc-section2">
          <div>
            <ul>{songList}</ul>
            <audio ref={ref => this.player = ref} />
          </div>
        </section>

        <section>
          {/* <h1>hello</h1> */}
          {/* <audio controls>
            <source src={window.obsessed} type="audio/mp3"/>
          </audio> */}
        </section>

      </div>
    )
  }
}

export default PlaylistContent;