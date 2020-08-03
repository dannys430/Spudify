import React from 'react';

import Media from '../media/media'

class Search extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      query: ''
    }
    
  }

  componentDidMount() {
    const {
      requestPlaylists, 
      requestArtists,
      requestAlbums,
      requestSongs
    } = this.props

    requestPlaylists()
    requestArtists()
    requestAlbums()
    requestSongs()
  }

  updateQuery(query) {
    this.setState({ query: query })
  }
  
  render() {
    
    const {
      playlists,
      artists,
      albums,
      songs
    } = this.props


    // SEARCH ALGORITHMS
    let artistResults = []
    let albumResults = []
    let playlistResults = []
    
    // let playlistSongResults = []
    // let playlistArtistResults = []

    if (this.state.query) {
      for (const artistId in artists) {
        if(artists[artistId]['artist_name'].toLowerCase().includes(this.state.query.toLowerCase())) {
          artistResults.push(artists[artistId])
        }
      }

      for (const albumId in albums) {
        if(albums[albumId]['album_name'].toLowerCase().includes(this.state.query.toLowerCase())) {
          albumResults.push(albums[albumId])
        }
      }

      for (const playlistId in playlists) {
        if(playlists[playlistId]['playlist_name'].toLowerCase().includes(this.state.query.toLowerCase())) {
          playlistResults.push(playlists[playlistId])
        }
      }
    }
    // // playlist
    // for (const playlist in playlists) {
    //   if(playlists[playlist]['songs'] && playlists[playlist]['songs'].length > 0) {
    //     for(const song in playlists[playlist]['songs']) {

    //       console.log(playlists[playlist]['songs'][song]['song_name'])
          
    //       playlists[playlist]['songs'][song]['song_name'].toLowerCase().includes(this.state.query.toLowerCase())
    //         ? !playlistSongResults.includes(playlists[playlist]['songs'][song]['song_name'])
    //             ? playlistSongResults.push(playlists[playlist]['songs'][song]['song_name'])
    //             : null
    //         : null

    //       playlists[playlist]['songs'][song]['artist']['artist_name'].toLowerCase().includes(this.state.query.toLowerCase())
    //         ? !playlistArtistResults.includes(playlists[playlist]['songs'][song]['artist']['artist_name'])
    //             ? playlistArtistResults.push(playlists[playlist]['songs'][song]['artist']['artist_name'])
    //             : null
    //         : null
    //     }
    //   }
    // }

    

    // RESULTS LIST

    const artistResultsList = artistResults.map((artist, id) => {
      return (
        <Media key={id} artist={artist} />
      )
    })

    const albumResultsList = albumResults.map((album, id) => {
      return (
        <Media key={id} album={album} />
      )
    })

    const playlistResultsList = playlistResults.map((playlist, id) => {
      return (
        <Media key={id} playlist={playlist} />
      )
    })

    // const playlistSongResultsList = playlistSongResults.map(playlistSongResult => {
    //   const ul = []
    //   ul.push(<li>{playlistSongResult}</li>)
    //   return ul
    // })

    // const playlistArtistResultsList = playlistArtistResults.map(playlistArtistResult => {
    //   const ul = []
    //   ul.push(<li>{playlistArtistResult}</li>)
    //   return ul
    // })


    return (
      <div className="search">
        <input
          style={{color: 'white', fontSize: '50px'}} 
          id=""
          type="text"
          placeholder="Search..."
          value={this.state.query}
          onChange={(e) => this.updateQuery(e.target.value)} 
        />


        {this.state.query && artistResultsList.length > 0 && (
          <div className="">
            <h1>ARTISTS:</h1>
            <ul className="results-list">{artistResultsList}</ul>
          </div>
        )}

        {this.state.query && albumResultsList.length > 0 && (
          <div className="">
            <h1>ALBUMS:</h1>
            <ul className="results-list">{albumResultsList}</ul>
          </div>
        )}

        {this.state.query && playlistResultsList.length > 0 && (
          <div className="">
            <h1>PLAYLISTS:</h1>
            <ul className="results-list">{playlistResultsList}</ul>
          </div>
        )}

        {/* {this.state.query && playlistSongResultsList.length > 0 && (
          <div className="">
            <h1>PLAYLIST SONGS:</h1>
            <ul>{playlistSongResultsList}</ul>
          </div>
        )}

      <br/><br/><br/><br/><br/>

        {this.state.query && playlistArtistResultsList.length > 0 && (
          <div className="">
            <h1>ARTISTS:</h1>
            <ul>{playlistArtistResultsList}</ul>
          </div>
        )}

      <br /><br /><br /><br /><br /> */}

      {/* <h1>ALBUMS:</h1>
        {this.state.query && (<ul>{albumResultsList}</ul>)}

      <br /><br /><br /><br /><br />
      
      <h1>PLAYLISTS:</h1>
        {this.state.query && (<ul>{playlistResultsList}</ul>)}

      <br /><br /><br /><br /><br /> */}





      </div>
    )
  }

}


export default Search;