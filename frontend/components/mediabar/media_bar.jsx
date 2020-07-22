import React from 'react';
import { Link, Route } from 'react-router-dom';

class MediaBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: null,
      duration: null
    }

    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount() {
    if (!this.props.currentSong) {
      this.props.receiveCurrentSong(this.props.queue[0])
    }
  }

  componentDidUpdate() {
    this.props.receiveDuration()
  }

  handlePlay() {
    if(!this.props.currentSong) {
      this.props.receiveCurrentSong(this.props.queue[0])
      this.props.play()
      document.getElementById('media-bar').src = this.props.queue[0].songUrl
      document.getElementById('media-bar').play()
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

    const formatTime = (time) => {
      return (!isNaN(time)) ? (`${Math.floor(time / 60)} : ${Math.floor(time % 60)}`) : null
    }

    const currentTime = formatTime(this.state.currentTime)
    const duration = formatTime(this.state.duration)

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

    // const source = this.props.currentSong ? this.props.currentSong.songUrl : this.props.queue[0].songUrl;




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

    return(
      <footer id="mediabar" className="mediabar">
          {console.log(this.props.currentSong)}
          <div>
            {songInfo}
          </div>

          <div>
            <button onClick={() => this.handlePrev()}>{prev}</button>
            {this.props.playing === false && (<button onClick={() => this.handlePlay()}>{icon}</button>)}
            {this.props.playing === true && (<button onClick={() => this.handlePause()}>{icon}</button>)}
            <button onClick={() => this.handleNext()}>{next}</button>

            <input id="volume" type="range"/>

            {this.props.playing || !this.props.playing ? (
              <div>
                {this.props.duration}
                {/* {currentTime} */}
              </div>
            ) : (
              ""
              )}
          </div>

            <input id="volume" type="range"/>

            <audio id="media-bar" onEnded={() => this.handleNext()}>
              Sorry, your browser doesn't support HTML5 audio.
            </audio>
            
      </footer>
    )
  }
}

export default MediaBar;