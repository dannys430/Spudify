import React from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.playlists
  }

  render() {

    // const playlist = this.props.currentUser.playlists[0]

    // const playlistIndex = user.playlists.map(playlist => {
    //   debugger
    //   return (
    //     <ul>
    //       <li>{playlist.playlist_name}</li>
    //     </ul>
    //   )
    // })

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
          <div>
            <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.00002 512" width="15px" height="15px"><g><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" data-original="#000000" className="active-path" data-old_color="#000000" fill="#B3B3B3" /></g> </svg>
            <h1>Liked Songs</h1>
          </div>
        </section>

        <section>
          {/* render playlist index */}
          <div>{currentUser.name}</div>
          {/* <div>{currentUser.playlists}</div> */}
        </section>

      </div>
    )
  }
}

export default LeftNav;