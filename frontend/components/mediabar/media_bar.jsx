import React from 'react';
import { Link, Route } from 'react-router-dom';

class MediaBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: null,
      volume: null
    }

    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount() {
    const audio = new Audio()
    audio.id = 'media-bar'
    document.body.appendChild(audio);

    // this.timeSlider.value = 0;
    // this.currentTimeInterval = null;

    // Get duration of the song and set it as max timeSlider value
    audio.onloadedmetadata = function () {
      this.setState({ duration: audio.duration });
    }.bind(this);

    // Sync timeSlider position with song current time
    audio.onplay = () => {
      this.currentTimeInterval = setInterval(() => {
        this.timeSlider.value = audio.currentTime;
      }, 500);
    };

    audio.onpause = () => {
      clearInterval(this.currentTimeInterval);
    };

    // Seek functionality
    // this.timeSlider.onchange = (e) => {
    //   clearInterval(this.currentTimeInterval);
    //   audio.currentTime = e.target.value;
    // };

    document.getElementById('media-bar').addEventListener('ended', () => {
      this.handleNext()
    })
  }

  componentWillUnmount() {
    this.handlePause()
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

  handleProgClick(e) {
    e.preventDefault()
    
    const barWidth = document.getElementById('time-bar').offsetWidth
    const selectedPos = e.clientX
    const leftX = document.getElementById('time-bar').getBoundingClientRect().left
    const rightX = document.getElementById('time-bar').getBoundingClientRect().right
    const progressPercentage = ((selectedPos - leftX) / barWidth) * 100

    document.getElementById('slider-button').style.left = `${progressPercentage}%`
    document.getElementById('time-bar-foreground').style.transform = `translateX(${progressPercentage - 100}%)`

    const audio = document.getElementById('media-bar')
    audio.currentTime = (progressPercentage * audio.duration) / 100
  }

  render() {
    const icon = this.props.playing 
      ? <div className="play-pause">
          <svg width="40" height="40" viewBox="0 0 130 130">
            <g>
              <circle fill="none" stroke="#b3b3b3" stroke-width="4" cx="64" cy="64" r="62" />
              <path stroke="null" fill="#b3b3b3" id="svg_3" d="m80.065076,86.881925a6.141957,1.390361 0 0 1 -6.141957,-1.390361l0,-43.101201a6.141957,1.390361 0 0 1 12.283913,0l0,43.101201a6.141957,1.390361 0 0 1 -6.141957,1.390361z" />
              <path stroke="null" fill="#b3b3b3" id="svg_7" d="m46.822559,87.15441a6.14196,1.39036 0 0 1 -6.14196,-1.39037l0,-43.1012a6.14196,1.39036 0 0 1 12.28391,0l0,43.1012a6.14196,1.39036 0 0 1 -6.14195,1.39037z" />
            </g>
          </svg>
        </div>
      : <div className="play-pause">
          <svg width="40" height="40" viewBox="0 0 130 130">
            <g>
              <circle fill="none" stroke="#b3b3b3" stroke-width="4" cx="64" cy="64" r="62" />
              <polygon fill="#b3b3b3" points="45,38 90,64 45,90" />
            </g>
          </svg>
        </div>

    const shuffle =   <div className="">
                        <svg width="60px" height="20px" viewBox="0 0 150 100">
                          <g>
                            <path d="M68.908,36.481l6.637,0.004l-0.008,3.512c-0.001,0.686,0.364,1.321,0.958,1.666c0.593,0.343,1.326,0.344,1.921,0.003    l16.145-9.284c0.596-0.342,0.963-0.976,0.964-1.662s-0.364-1.32-0.957-1.665l-16.112-9.343c-0.595-0.345-1.326-0.346-1.921-0.004    c-0.595,0.342-0.962,0.976-0.964,1.662l-0.006,3.497l-6.656-0.004c-10.232,0-17.68,9.469-24.883,18.627    c-6.009,7.643-12.224,15.545-18.084,15.545H1.921C0.86,59.036,0,59.895,0,60.957v7.775c0,1.062,0.86,1.922,1.921,1.922H25.94    c11.5,0,19.848-10.611,27.213-19.977C58.643,43.698,64.318,36.481,68.908,36.481z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B3B3B3" />
                            <path d="M94.561,63.142l-16.145-9.283c-0.595-0.343-1.328-0.343-1.921,0.003c-0.594,0.344-0.959,0.979-0.958,1.666l0.008,3.512    l-6.635,0.004c-3.48,0-7.718-4.472-10.604-7.834l-7.832,8.701c4.442,5.005,10.554,10.752,18.437,10.752l6.654-0.004l0.006,3.496    c0.001,0.687,0.369,1.319,0.964,1.662c0.296,0.17,0.626,0.255,0.957,0.255c0.333,0,0.666-0.086,0.964-0.26l16.111-9.343    c0.594-0.344,0.958-0.979,0.957-1.665C95.523,64.119,95.156,63.486,94.561,63.142z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B3B3B3" />
                            <path d="M25.94,24.872H1.921C0.86,24.872,0,25.732,0,26.792v7.776c0,1.061,0.86,1.921,1.921,1.921H25.94    c4.341,0,8.833,4.511,11.835,7.904l7.739-8.743C41.244,31.024,34.569,24.872,25.94,24.872z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B3B3B3" />
                          </g>
                        </svg>
                      </div>

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

    const repeat =  <div>
                      <svg width="60px" height="18px" viewBox="1 1 100 600">
                        <g>
                          <path d="M507.336,100.696l-96-96c-4.576-4.576-11.456-5.952-17.44-3.456c-5.984,2.496-9.888,8.288-9.888,14.752v48h-208    c-97.216,0-176,78.784-176,176c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16c0-44.192,35.808-80,80-80h208v48    c0,6.464,3.904,12.32,9.888,14.784c5.984,2.496,12.864,1.12,17.44-3.456l96-96C513.576,117.08,513.576,106.936,507.336,100.696z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B3B3B3"/>
                          <path d="M496.008,255.992h-64c-8.832,0-16,7.168-16,16c0,44.192-35.808,80-80,80h-208v-48c0-6.464-3.904-12.32-9.888-14.784    s-12.832-1.088-17.44,3.488l-96,96c-6.24,6.24-6.24,16.384,0,22.624l96,96c4.576,4.576,11.456,5.952,17.44,3.456    s9.888-8.32,9.888-14.784v-48h208c97.216,0,176-78.784,176-176C512.008,263.16,504.84,255.992,496.008,255.992z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B3B3B3"/>
                        </g>
                      </svg>
                    </div>

    const volumeMute =  <div>
                          <svg width="25px" height="25px" viewBox="0 0 500 700">
                            <g>
                              <path d="M100,300 L100,450 L180,450 L320,530 L320,220 L180,300 L100,300 Z" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                              <path d="M400,310 L540,450" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                              <path d="M400,450 L540,310" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                            </g>
                          </svg>
                        </div>
      
    const volumeLow = <div>
                        <svg width="25px" height="25px" viewBox="0 0 500 700">
                          <g>
                            <path d="M100,300 L100,450 L180,450 L320,530 L320,220 L180,300 L100,300 Z" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                            <path d="M400,310 C470,390 400,450 400,450" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                          </g>
                        </svg>
                      </div>
      
    const volumeMedium =  <div>
                            <svg width="25px" height="25px" viewBox="0 0 500 700">
                              <g>
                                <path d="M100,300 L100,450 L180,450 L320,530 L320,220 L180,300 L100,300 Z" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>                                
                                <path d="M420,260 C530,390 420,500 420,500" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                              </g>
                            </svg>
                          </div>

    const volumeHigh =  <div>
                            <svg width="25px" height="25px" viewBox="0 0 500 700">
                              <g>
                                <path d="M100,300 L100,450 L180,450 L320,530 L320,220 L180,300 L100,300 Z" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                                <path d="M410,270 C520,390 410,490 410,490" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                                <path d="M490,180 C670,390 490,580 490,580" fill="transparent" stroke="#B3B3B3" stroke-width="30px"></path>
                              </g>
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
                  <svg width="20" height="20" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="#7f7f7f"></path></svg>
                </div>
                <div className="media-bar-div-song-info">
                  <p>{this.props.currentSong.song_name}</p>
                  <p><Link to={`/artists/${this.props.currentSong.artist.id}`}>{this.props.currentSong.artist.artist_name}</Link></p>
                </div>
              </div>
        : null

    if(this.props.currentSong && this.props.playing) {
      document.title = `${this.props.currentSong.song_name} • ${this.props.currentSong.artist.artist_name}`
    } else if(this.props.currentSong && this.props.playing === false) {
      document.title = `Spudify`
    }


    return(
      <footer id="mediabar" className="mediabar">
          <div className="left-div">
            {songInfo}
          </div>

          <div className="center-div">
            <div className="controls-div">
              <button>{shuffle}</button>
              <button onClick={() => this.handlePrev()}>{prev}</button>
              {this.props.playing === false && (<button onClick={() => this.handlePlay()}>{icon}</button>)}
              {this.props.playing === true && (<button onClick={() => this.handlePause()}>{icon}</button>)}
              <button onClick={() => this.handleNext()}>{next}</button>
              <button>{repeat}</button>
            </div>

            <div className="time-bar-div">

              <div className="current-time">
                <div>{this.props.currentTime}</div>
              </div>

            <div 
              id="time-bar" 
              className="time-bar"
              onClick={e => this.handleProgClick(e)}
            >
              {/* <input
                className="time-slider"
                ref={(timeSlider) => { this.timeSlider = timeSlider }}
                type="range"
                // name="points"
                // min="0" max={this.state.duration}
              /> */}

              <div className="center-time-bar time-bar-background">
                <div className="time-bar-foreground-wrapper">
                  <div 
                    id="time-bar-foreground"
                    className="time-bar-foreground"
                    style={{transform: `translateX(${(Math.round(this.props.currentTimeRaw) / Math.round(this.props.durationRaw)) * 100 - 100}%)`}}
                  >
                  </div>
                </div>
                <button 
                  id="slider-button"
                  className="center-time-bar time-bar-slider"
                  style={{left: `${(Math.round(this.props.currentTimeRaw) / Math.round(this.props.durationRaw)) * 100}%`}}
                >
                </button>
              </div>

              
              
              
            </div>
              
              <div className="media-bar-duration">
                <div>{this.props.duration}</div>
              </div>
              
            </div>

          </div>

          <div className="right-div">
            {volumeHigh}
            <input
                className="volume-slider"
                ref={(volumeSlider) => { this.volumeSlider = volumeSlider }}
                type="range"
                name="points"
                min="0" max={this.state.volume}
              />
          </div>
  
      </footer>
    )
  }
}

export default MediaBar;