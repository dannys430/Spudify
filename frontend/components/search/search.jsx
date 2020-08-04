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

  selectInputField() {
    document.getElementById('search').focus()
  }

  updateQuery(query) {
    this.setState({ query: query })
  }

  clearQuery() {
    this.setState({query: ''})
    document.getElementById('search').focus()
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
    let songResults = []
    
    // let playlistSongResults = []
    // let playlistArtistResults = []

    if (this.state.query) {
      for (const artistId in artists) {
        if (artists[artistId]['artist_name'] && artists[artistId]['artist_name'].toLowerCase().includes(this.state.query.toLowerCase())) {
          artistResults.push(artists[artistId])
        }
      }

      for (const albumId in albums) {
        if (albums[albumId]['album_name'] && albums[albumId]['album_name'].toLowerCase().includes(this.state.query.toLowerCase())) {
          albumResults.push(albums[albumId])
        }
      }

      for (const playlistId in playlists) {
        if (playlists[playlistId]['playlist_name'] && playlists[playlistId]['playlist_name'].toLowerCase().includes(this.state.query.toLowerCase())) {
          playlistResults.push(playlists[playlistId])
        }
      }

      for (const songId in songs) {
        if (songs[songId]['song_name'] && songs[songId]['song_name'].toLowerCase().includes(this.state.query.toLowerCase())) {
          songResults.push(songs[songId])
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

    const searchIcon =  <svg onClick={() => this.selectInputField()} width="21" height="24">
                          <circle stroke="black" fill="none" r="8" cx="10" cy="10"></circle>
                          <line x1="15" x2="19.5" y2="21.5" stroke="black" y1="16"></line>
                        </svg>

    const xIcon = <svg width="21" height="24">
                    <line x1="3" x2="17" y2="19" stroke="black" y1="5"></line>
                    <line x1="17" x2="3" y2="19" stroke="black" y1="5"></line>
                  </svg>

    return (
      <div className="search">
        <div className="search-input-div">
          <input
            className="search-input" 
            id="search"
            type="text"
            placeholder="Search for Artists, Albums, or Playlists"
            value={this.state.query}
            onChange={(e) => this.updateQuery(e.target.value)} 
          />
          <span className="search-icon-span">{searchIcon}</span>
          {this.state.query && (<span onClick={() => this.clearQuery()} className="x-icon-span">{xIcon}</span>)}
        </div>


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

        {this.state.query 
          && artistResultsList.length === 0
          && albumResultsList.length === 0
          && playlistResultsList.length === 0          
          && (<h1>No results found for "{this.state.query}"</h1>)
        }

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