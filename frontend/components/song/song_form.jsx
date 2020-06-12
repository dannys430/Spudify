import React from 'react';
import { Link } from 'react-router-dom';

class SongForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      song_name: "",
      year: "",
      album_id: "",
      explicit: "",
      song_file: null,
      songUrl: "",
      songFile: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0]
    reader.onloadend = () => this.setState({ songUrl: reader.result, songFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ songUrl: "", songFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const song = new FormData();
    song.append('song[song_name]', this.state.song_name);
    song.append('song[year]', this.state.year);
    song.append('song[album_id]', this.state.album_id);
    song.append('song[explicit]', this.state.explicit);

    if (this.state.songFile) {
      song.append('song[song_file]', this.state.songFile);
    }

    this.props.createNewSong(song)
      .then(() => this.props.history.push(`/us`))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Song Form</h1>

          <label>Song Name
            <input
              type="text"
              placeholder="Song Name"
              onChange={this.update('song_name')}
            />
          </label>

          <label>Year
            <input
              type="date"
              onChange={this.update('year')}
            />
          </label>

          <label>Album ID
            <input
              type="text"
              placeholder="Album ID"
              onChange={this.update('album_id')}
            />
          </label>

          <label>Explicit?

            <label>True
              <input
                type="radio"
                id="true"
                name="explicit"
                value="true"
                onChange={this.update('explicit')}
              />
            </label>
<<<<<<< HEAD

=======
            
>>>>>>> playlist
            <label>False
              <input
                type="radio"
                id="false"
                name="explicit"
                value="false"
                onChange={this.update('explicit')}
              />
            </label>

          </label>
<<<<<<< HEAD

=======
          
>>>>>>> playlist


          <label>Song File
            <input type="file" onChange={(e) => this.handleFile(e)} />
          </label>
<<<<<<< HEAD

=======
          
>>>>>>> playlist
          <button onClick={this.handleSubmit}>ADD SONG</button>

        </form>
      </div>
    )
  }
}



export default SongForm;
