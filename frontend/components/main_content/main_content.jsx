import React from 'react';

import SearchContainer from '../search/search_container';
import PlaylistsContainer from '../collection/playlists_container';
import LikedSongsContainer from '../collection/liked_songs_container';
import PlaylistContentContainer from '../playlist/playlist_content_container';
import AlbumContentContainer from '../album/album_content_container';
import ArtistContentContainer from '../artist/artist_content_container'

import { Route } from 'react-router-dom';



class MainContent extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  //   return this.props.requestPlaylists()
  // }
  
  render() {
    return (
      <div className="main-content-div" >
        {/* <PlaylistContentContainer props={this.props}/> */}
        <Route path="/search" component={SearchContainer} />
        <Route path="/collection/playlists" component={PlaylistsContainer} />
        <Route path="/collection/tracks" component={LikedSongsContainer} />
        <Route path="/playlists/:id" component={PlaylistContentContainer} />
        <Route path="/albums/:id" component={AlbumContentContainer} />
        <Route path="/artists/:id" component={ArtistContentContainer} />
      </div>
    )
  }
}

export default MainContent;