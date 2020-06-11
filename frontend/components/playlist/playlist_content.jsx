import React from 'react';

class PlaylistContent extends React.Component {
  
  componentDidMount() {
    debugger
    this.props.requestPlaylist(this.props.playlist.id)
  }


  render() {

    return (
      <div>
        <section className="pc-section1">
          <div className="album-photo"></div>
          <div>
            <h2>PLAYLIST</h2>
            {/* <h1>Don't Tell The Bank(feat.Roshin) - Shaun Frank</h1> */}
            <h1>{this.props.playlist.playlist_name}</h1>
            <h2>Danny Singer</h2>
          </div>
        </section>
      </div>
    )
  }
}

export default PlaylistContent;