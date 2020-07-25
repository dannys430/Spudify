import React from 'react';
import { Link, Route } from 'react-router-dom';

class MediaBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // song_src: 'https://active-storage-spudify-dev.s3.amazonaws.com/ik_mis_je_ft._kempi.mp3',
      // song_src: 'http://jukebox.pierrevanlierop.nl/The90s/01.%20Collective%20Soul%20-%20Shine%20(June%201994).mp3',
      // is_playing: false,
      // progress: 0.0333,
      // progress_drag: false,

      duration: null,
    }

    // this.is_progress_dirty = false
    // this.registered_events = false

    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  // startSetProgress(e) {
  //   this.setState({
  //     progress_drag: true
  //   })
  //   this.setProgress(e)
  // }

  // stopSetProgress(e) {
  //   this.setState({
  //     progress_drag: false
  //   })
  //   this.setProgress(e)
  // }

  // setProgress(e) {
  //   if (this.state.progress_drag) {
  //     var progress = (e.clientX - offsetLeft(this.refs.progress_bar)) / this.refs.progress_bar.clientWidth
  //     this.setState({
  //       progress: progress
  //     })
  //     this.is_progress_dirty = true
  //   }
  // }
  
  // togglePlay() {
  //   this.setState({ is_playing: !this.state.is_playing })
  // }



  componentDidMount() {
    const audio = new Audio()
    audio.id = 'media-bar'
    document.body.appendChild(audio);

    this.slider.value = 0;
    this.currentTimeInterval = null;

    // Get duration of the song and set it as max slider value
    audio.onloadedmetadata = function () {
      this.setState({ duration: audio.duration });
    }.bind(this);

    // Sync slider position with song current time
    audio.onplay = () => {
      this.currentTimeInterval = setInterval(() => {
        this.slider.value = audio.currentTime;
      }, 500);
    };

    audio.onpause = () => {
      clearInterval(this.currentTimeInterval);
    };

    // Seek functionality
    this.slider.onchange = (e) => {
      clearInterval(this.currentTimeInterval);
      audio.currentTime = e.target.value;
    };
  }

  handlePlay() {
    if(!this.props.currentSong) {
      this.props.receiveCurrentSong(this.props.queue[0])
      this.props.play()
      document.getElementById('media-bar').src = this.props.queue[0].songUrl
      document.getElementById('media-bar').play()

      document.getElementById('media-bar').addEventListener('progress', (e) => {
        this.props.receiveDuration()
      })
      document.getElementById('media-bar').addEventListener('timeupdate', (e) => {
        this.props.receiveCurrentTime()
      })
    }

    if (this.props.queue[0] !== this.props.history[this.props.history.length - 1]) {
      this.props.history.push(this.props.queue[0])
    }
    
    this.props.play()
    document.getElementById('media-bar').play()
  }

  handlePause() {
    this.props.pause()
    document.getElementById('media-bar').pause()
  }

  handlePrev() {
    if (this.props.history[this.props.history.indexOf(this.props.currentSong) - 1]) {
      this.props.receiveCurrentSong(this.props.history[this.props.history.indexOf(this.props.currentSong) - 1])
      document.getElementById('media-bar').src = this.props.history[this.props.history.indexOf(this.props.currentSong) - 1].songUrl
      document.getElementById('media-bar').play()
    }
  }

  handleNext() {
    if (this.props.currentSong) {
      const currentIndex = this.props.queue.indexOf(this.props.currentSong)
      if(this.props.queue[currentIndex + 1]) {
        this.props.receiveCurrentSong(this.props.queue[currentIndex + 1])
        document.getElementById('media-bar').src = this.props.queue[currentIndex + 1].songUrl
        document.getElementById('media-bar').play()
        this.props.history.push(this.props.queue[currentIndex + 1])
      }
    }
  }

  render() {

    // const formatTime = (time) => {
    //   return (!isNaN(time)) ? (`${Math.floor(time / 60)} : ${Math.floor(time % 60)}`) : null
    // }

    // const currentTime = formatTime(this.state.currentTime)
    // const duration = formatTime(this.state.duration)

    const icon = this.props.playing 
    ? <img className="play-pause" src="/assets/pause.svg" alt="pause" />
    : <img className="play-pause" src="/assets/play.svg" alt="play" /> 

    const prev =  <div>
                    <svg height="15" width="15">
                      <polygon fill="#b3b3b3" points="1,7 13,1 13,13" />
                      <line x1="2" x2="2" y1="1" y2="13" stroke="#b3b3b3" stroke-width="2"></line>
                    </svg>
                  </div>

    const next =  <div>
                    <svg height="15px" width="15px">
                      <polygon fill="#b3b3b3" points="1,1 13,7 1,13"/>
                      <line x1="12" x2="12" y1="1" y2="13" stroke="#b3b3b3" stroke-width="2"/>
                    </svg>
                  </div>

    const songInfo = 
      this.props.currentSong
        ? this.props.currentSong.coverArtUrl 
            ? <div className="media-bar-div">
                <img className="media-bar-cover-art" src={this.props.currentSong.coverArtUrl}></img>
                <div className="media-bar-div-song-info">
                  <p>{this.props.currentSong.song_name}</p>
                  <p><Link to={`/artists/${this.props.currentSong.artist.id}`}>{this.props.currentSong.artist.artist_name}</Link></p>
                </div>
              </div>
            : <div className="media-bar-div">
                <div className="media-bar-cover-art">
                  <svg width="20" height="20" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f" fill-rule="evenodd"></path></svg>
                </div>
                <div className="media-bar-div-song-info">
                  <p>{this.props.currentSong.song_name}</p>
                  <p><Link to={`/artists/${this.props.currentSong.artist.id}`}>{this.props.currentSong.artist.artist_name}</Link></p>
                </div>
              </div>
        : null






    // if (this.refs.player) {
    //   var player = this.refs.player
    //   if (player.currentSrc !== this.state.song_src) {
    //     player.src = this.state.song_src
    //   }

    //   if (player.paused) {
    //     if (this.state.is_playing) {
    //       player.play()
    //     }
    //   } else if (!this.state.is_playing) {
    //     player.pause()
    //   }

    //   if (this.is_progress_dirty) {
    //     this.is_progress_dirty = false
    //     player.currentTime = player.duration * this.state.progress
    //   }

    //   if (!this.registered_events) {
    //     this.registered_events = true

    //     player.addEventListener('progress', e => {
    //       // console.log(e)
    //       if (!this.is_progress_dirty) {
    //         this.setState({
    //           progress: player.currentTime / player.duration
    //         })
    //       }
    //     })
    //   }
    // }










    return(
      <footer id="mediabar" className="mediabar">
          <div className="left-div">
            {songInfo}
          </div>

          <div className="center-div">
            <div className="controls-div">
              <button onClick={() => this.handlePrev()}>{prev}</button>
              {this.props.playing === false && (<button onClick={() => this.handlePlay()}>{icon}</button>)}
              {this.props.playing === true && (<button onClick={() => this.handlePause()}>{icon}</button>)}
              <button onClick={() => this.handleNext()}>{next}</button>
            </div>

            <div className="progress-bar-div">

              <div className="current-time">
                <div>{this.props.currentTime}</div>
              </div>

              {/* <i onClick={this.togglePlay.bind(this)}>play/pause</i>
              <div 
                onMouseDown={this.startSetProgress.bind(this)}
                onMouseMove={this.setProgress.bind(this)}
                onMouseLeave={this.stopSetProgress.bind(this)}
                onMouseUp={this.stopSetProgress.bind(this)}
                className="progress"
              >
                <div ref="progress_bar" className="bar">
                  <div style={{width: `${this.state.progress * 100}%`}}></div>
                </div>
              </div> */}

            <div className="progress-input-range-div">
              <input
                ref={(slider) => { this.slider = slider }}
                type="range"
                name="points"
                min="0" max={this.state.duration}
              />
            </div>
              
              <div className="media-bar-duration">
                <div>{this.props.duration}</div>
              </div>
              
            </div>

          </div>

          <div className="right-div">
            
            <br />
            
          </div>

            {/* <audio id="media-bar" onEnded={() => this.handleNext()}>
              Sorry, your browser doesn't support HTML5 audio.
            </audio> */}

        {/* <audio ref="player">
          <source src={this.state.song_src}></source>
        </audio> */}



       




            
      </footer>
    )
  }
}

// function offsetLeft(el) {
//   var left = 0;
//   while (el && el !== document) {
//     left += el.offsetLeft
//     el = el.offsetParent
//   }
//   return left + 5
// }


export default MediaBar;