import React from 'react';
import { Link, Route } from 'react-router-dom';
import { RECEIVE_DURATION } from '../../actions/media_bar_actions';

import SongMenuContainer from './song_menu_container'

// const formatTime = (time) => {
//   return (!isNaN(time)) ? (`${Math.floor(time / 60)} : ${Math.floor(time % 60)}`) : null
// }

String.prototype.toMMSS = function () {
  var sec_num = parseInt(this, 10);
  var mins = Math.floor((sec_num) / 60);
  var secs = sec_num - (mins * 60);
  if (secs < 10) { secs = "0" + secs; }
  return mins + ":" + secs;
}

class Song extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      song: this.props.song,
      // nowPlaying: false,
      duration: null,
      currentTime: null,
      hovered: false,
    }

    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)

    // this.toggleHover = this.toggleHover.bind(this)
  }

  // componentWillUnmount() {
  //   this.setState({duration: null, currentTime: null})
  // }

  // componentDidMount() {
  //   const song = this.props.currentSong ? this.props.currentSong.songUrl : this.props.song.songUrl
    

  // }

 

  componentDidMount() {
    const audio = document.createElement('audio')
    audio.src = this.props.song.songUrl
    audio.onloadedmetadata = () => {
      this.setState({duration: `${audio.duration}`.toMMSS()})
    }
  }

  // componentDidUpdate() {
  //   const audio = document.createElement('audio')
  //   audio.src = this.props.song.songUrl
  //   audio.onloadedmetadata = () => {
  //     this.setState({ duration: formatTime(audio.duration)})
  //   }
  // }

  // componentWillUnmount() {
  //   this.setState({song: null, nowPlaying: false, duration: null, currentTime: null})
  // }

  // componentDidMount() {
  //   // const formatTime = (time) => {
  //   //   return (!isNaN(time)) ? (`${Math.floor(time / 60)} : ${Math.floor(time % 60)}`) : null
  //   // }
  //   // const aud = document.createElement('AUDIO');
  //   // aud.src = this.state.song.songUrl
  //   // aud.onloadedmetadata = () => {
  //   //   this.setState({duration: formatTime(aud.duration)})
  //   // }
  //   // aud.ontimeupdate = (e) => {
  //   //   this.setState({currentTime: e.target.currentTime})
  //   // }

  // }

  // componentDidUpdate() {
  //   // this.props.playing ? document.getElementById('audio').play() : document.getElementById('audio').pause()

  //   // this.props.receiveCurrentSong(this.props.queue[0])
  //   // console.log(this.props.currentSong)
  // }

  handlePlay(song) {
    // this.setState({nowPlaying: true})
    if (!this.props.currentSong || this.props.currentSong !== song) {
      this.props.receiveCurrentSong(song)
      this.props.play()
      document.getElementById('media-bar').src = song.songUrl
      document.getElementById('media-bar').play()

      document.getElementById('media-bar').addEventListener('loadedmetadata', (e) => {
        this.props.receiveDuration()
      })
      document.getElementById('media-bar').addEventListener('timeupdate', (e) => {
        this.props.receiveCurrentTime()
      })
      
      if(song !== this.props.history[this.props.history.length - 1]) {
        this.props.history.push(song)
      }
    }
    if (this.props.currentSong) {
      this.props.play()
      document.getElementById('media-bar').play()
    }
  }

  handlePause() {
    // this.setState({ nowPlaying: false })
    // this.props.receiveCurrentSong(song)
    this.props.pause()
    document.getElementById('media-bar').pause()
  }

  // toggleHover() {
  //   this.setState(prevState => ({hovered: !prevState.hovered}));
  // }

  enableHover() {
    this.setState({hovered: true})
  }

  disableHover() {
    this.setState({hovered: false})
  }
  
  render() {

    const song = this.props.song;
    // const songName = song.song_name;
    // const artist = song.artist
    // const artistName = artist.artist_name
    // const album = song.album
    // const albumName = song.album.album_name

    // const source = this.props.song ? this.props.song.songUrl : this.props.queue[0].songUrl;

    // const formatTime = (time) => {
    //   return (!isNaN(time)) ? (`${Math.floor(time / 60)} : ${Math.floor(time % 60)}`) : null
    // }

    // const aud = document.createElement('audio');
    // aud.src = source
    // aud.onloadedmetadata = () => {
    //   this.setState({duration: formatTime(aud.duration)})
    // }
    // aud.ontimeupdate = (e) => {
    //   this.setState({currentTime: e.target.currentTime})
    // }

    const note =  <svg className="note-sml" width='20' height='20'>
                    <circle stroke="#aeaeae" fill="transparent" r="2" cx="6" cy="16"></circle>
                    <line stroke="#aeaeae" x1="8" x2="8" y1="16" y2="4"></line>
                    <line stroke="#aeaeae" x1="8" x2="12" y1="4.5" y2="7"></line>
                  </svg>

    const noteActive =  <svg className="note-sml" width='20' height='20'>
                          <circle stroke="#68d962" fill="transparent" r="2" cx="6" cy="16"></circle>
                          <line stroke="#68d962" x1="8" x2="8" y1="16" y2="4"></line>
                          <line stroke="#68d962" x1="8" x2="12" y1="4.5" y2="7"></line>
                        </svg>

    const playIconHover =   <div className="play-pause-sml">
                              <svg height="15px" width="15px">
                                <polygon fill="#FFFFFF" points="1,1 13,7 1,13" />
                              </svg>
                            </div>
    
    const playIcon =  <div className="play-pause-sml">
                        <svg height="15px" width="15px">
                          <polygon fill="#68D962" points="1,1 13,7 1,13" />
                        </svg>
                      </div>
    
    const pauseIcon = <svg className="play-pause-sml" viewBox="0 0 40 40"width="15px" height="15px">
                        <g>
                          <rect x="23.5" width="6" height="40" fill="#68D962" />
                          <rect x="10.5" width="6" height="40" fill="#68D962" />
                        </g>
                      </svg>
                      
    const songName = <p className="song-name">{this.props.song.song_name}</p>
    const songNameActive = <p className="song-name-active">{this.props.song.song_name}</p>

    const songDivStyles = {}
    if(this.props.currentSong === song) {
      songDivStyles.backgroundColor = "rgb(40, 40, 40)"
    }
    
    return (
      <div style={songDivStyles} draggable="true" className="song-div" onMouseEnter={() => this.enableHover()} onMouseLeave={() => this.disableHover()} onDoubleClick={() => this.handlePlay(song)}>
        <div className="play-pause-sml-div">
          {/* {(this.state.nowPlaying === false || (this.state.nowPlaying === true && this.props.currentSong !== song)) && (<button onClick={() => this.handlePlay(song)}>{playIcon}</button>)} */}
          {/* {(this.state.nowPlaying === true && this.props.currentSong === song) && (<button onClick={() => this.handlePause()}>{pauseIcon}</button>)} */}

          {this.props.currentSong !== song
            ? this.state.hovered 
                ? <button onClick={() => this.handlePlay(song)}>{playIconHover}</button>
                : note
            : this.state.hovered 
                ? this.props.playing
                  ? <button onClick={() => this.handlePause()}>{pauseIcon}</button>
                  : <button onClick={() => this.handlePlay(song)}>{playIcon}</button>
                : noteActive
          }

          {/* {this.state.hovered && this.props.currentSong !== song ? playIconHover : null} */}
          {/* {this.props.currentSong === song && this.props.playing === true ? <button onClick={() => this.handlePause()}>{pauseIcon}</button> : <button onClick={() => this.handlePlay(song)}>{playIcon}</button>} */}
        </div>

        <div className="song-details-div">
          {this.props.currentSong === song ? songNameActive : songName}
          {/* {this.props.song.song_name} */}
          {this.props.parentIsPlaylist 
            ? <div className="song-details"><p><Link to={`/artists/${this.props.song.artist.id}`}>{this.props.song.artist.artist_name}</Link></p> <h2 className="bullet-point">•</h2> <p className="song-details-album"><Link to={`/albums/${this.props.song.album.id}`}>{this.props.song.album.album_name}</Link></p></div> 
            : <div className="song-details"><p><Link to={`/artists/${this.props.song.artist.id}`}>{this.props.song.artist.artist_name}</Link></p></div>}
          
        </div>
   
        <div className="duration">
          <SongMenuContainer song={song}/>
          <div>{this.state.duration}</div>
        </div>
        {/* {this.state.currentTime} */}

        
      </div>
    )
  }
}

export default Song;