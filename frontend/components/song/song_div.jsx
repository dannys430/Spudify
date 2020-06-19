import React from 'react';

class SongDiv extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        {this.props.song.song_name}
        <br/>
        {this.props.song.artist.artist_name}
        {this.props.song.album.album_name}
      </div>
    )
  }
}

export default SongDiv;