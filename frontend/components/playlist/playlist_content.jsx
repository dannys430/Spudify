import React from 'react';
import { Link, Route } from 'react-router-dom';

import SongContainer from '../song/song_container';

class PlaylistContent extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   currentTime: null,
    //   duration: null,
    // }

    // this.handlePlay = this.handlePlay.bind(this)
    // this.handlePause = this.handlePause.bind(this)
  }
  //do component did mount within Song Div, NOT playlist, so that it grabs duration of all songs, not the first song in playlist.

  componentDidMount() {
    // document.getElementById('audio') ? document.getElementById('audio').addEventListener('loadedmetadata', e => {
    //   const duration = document.getElementById('audio').duration
    //   this.setState({
    //     duration: e.target.duration
    //   })
    // }) : null;
    // document.getElementById('audio') ? document.getElementById('audio').addEventListener("timeupdate", e => {
    //   // const duration = document.getElementById('audio').duration
    //   this.setState({
    //     currentTime: e.target.currentTime,
    //   });
    // }): null;

    this.props.requestPlaylist(this.props.match.params.id)  // getting the playlist with id found in query
    this.props.receiveCurrentSong(this.props.queue[0])
  }

  // componentDidUpdate() {
  //   // this.props.playing ? document.getElementById('audio').play() : document.getElementById('audio').pause()

  //   // this.props.receiveCurrentSong(this.props.queue[0])
  //   // console.log(this.props.currentSong)
  // }

  // componentWillUnmount() {
  //   this.props.playlist = null;
  // }

  // handlePlay(song) {
  //   this.props.receiveCurrentSong(song)
  //   this.props.play()
  //   document.getElementById('audio').play()
  //   this.props.history.push(song)
  // }

  // handlePause(song) {
  //   this.props.receiveCurrentSong(song)
  //   this.props.pause()
  //   document.getElementById('audio').pause()
  // }


  render() {
    if (!this.props.playlist) {
      return null;
    }

    if (!this.props.playlist.songs) {
      return null;
    }

    const playlistSongs = this.props.playlist.songs
    this.props.receiveQueue(playlistSongs)
    // this.props.receiveQueue(this.props.playlist.songs)
    // console.log(this.props.queue)

    const formatTime = (time) => {
      return (!isNaN(time)) ? (`${Math.floor(time / 60)} : ${Math.floor(time % 60)}`) : null
    }

    // const currentTime = formatTime(this.state.currentTime)
    // const duration = formatTime(this.state.duration)


    const songList = playlistSongs ? playlistSongs.map((song, id) => {
      return (
        <SongContainer key={id} song={song}/>



        // <li className="song-li"
        //   key={id}
        //   onDoubleClick={() => this.handlePlay(song)}
        // >
        //   {/* {this.state.currentTime} */}
        //   {/* {this.props.playing === false && (<button onClick={() => this.handlePlay(song)}>Play</button>)}
        //   {this.props.playing === true && (<button onClick={() => this.handlePause(song)}>Pause</button>)} */}

        //   <h1>{song.song_name}</h1>
        //   <p><Link to={`/artists/${song.artist.id}`}>{song.artist.artist_name}</Link> • <Link to={`/albums/${song.album.id}`}>{song.album.album_name}</Link>    </p>

        //   {/* {duration} */}
        //   {this.props.playing || !this.props.playing ? (
        //     <div className="current-time-duration">
        //       {currentTime} | {duration}
        //     </div>
        //   ) : (
        //       ""
        //     )}


        // </li>
      )
    }) : null;

    // const source = this.props.currentSong ? this.props.currentSong.songUrl : this.props.queue[0].songUrl;

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
          </div>
        </section>

      </div>
    )
  }
}

export default PlaylistContent;