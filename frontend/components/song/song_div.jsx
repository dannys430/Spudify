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
        {/* {console.log(this.props.song.songUrl)} */}
        <audio controls>
          <source src={this.props.song.songUrl}/>
        </audio>
      </div>
    )
  }
}

export default SongDiv;