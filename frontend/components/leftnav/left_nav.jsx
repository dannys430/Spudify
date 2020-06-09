import React from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="left-nav">
        <div className="left-nav-logo">
          <Link className="logo2" to="/us"><img src={window.logo2URL} alt="Spudify Logo" /></Link>
        </div>

        <section className="left-nav-section1">

          <Link to="/us">
            <div>
              <svg viewBox="0 0 512 512" width="24" height="24">
              {/* <path fill="var(--ltgray)" d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"></path> */}
              <path fill="var(--ltgray)" d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"></path>
              </svg>
              <h1>Home</h1>
            </div>
          </Link>
          
          <Link to="/search">
            <div>
              <svg viewBox="0 0 512 512" width="24" height="24">
                <path d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z" fill="var(--ltgray)"></path>
              </svg>
              <h1>Search</h1>
            </div>
          </Link>
          
          <Link to="/collection/playlists">
            <div>
              <svg viewBox="0 0 512 512" width="24" height="24">
              <path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="var(--ltgray)"></path>
              </svg>
              <h1>Your Library</h1>
            </div>
          </Link>

        </section>

        <section className="left-nav-section2">
          <h2>PLAYLISTS</h2>
          <div className="plus-sign-div-container">
            
              <svg className="plus-icon" fill="var(--black)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 13 19 L 13 13 L 19 13 L 19 11 L 13 11 L 13 5 Z" />
              </svg>
              <h1>{this.props.otherForm}</h1>
            
          </div>
        </section>

        <section>
          {/* render playlist index */}
        </section>
        
      </div>
    )
  }
}

export default LeftNav;