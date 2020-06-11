import React from 'react';

class PlaylistContent extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    // debugger
    // return this.props.requestPlaylist(this.props.playlist.id)
    return this.props.requestPlaylist(this.props.match.params.id)
  }


  render() {

    if (!this.props.playlist) {
      return null;
    }

    return (
      <div>
        <section className="pc-section1">
          <div className="album-photo"></div>
          <div>
            <h2>PLAYLIST</h2>
            <h1>{this.props.playlist.playlist_name}</h1>
            <h2>{this.props.playlist.user.name}</h2>
            {/* <h2>{this.props.playlist.songs.first.song_name}</h2> */}

          </div>
        </section>
      </div>
    )
  }
}

export default PlaylistContent;