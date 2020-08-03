import React from 'react'
import {connect} from 'react-redux';

import {requestPlaylists} from '../../actions/playlist_actions';
import {requestArtists} from '../../actions/artist_actions';
import {requestAlbums} from '../../actions/album_actions';
import {requestSongs} from '../../actions/song_actions'

import Search from './search';

const mSTP = (state) => {
  return {
    playlists: state.entities.playlists,
    artists: state.entities.artists,
    albums: state.entities.albums,
    songs: state.entities.songs
  }
}

const mDTP = (dispatch) => {
  return {
    requestPlaylists: () => dispatch(requestPlaylists()),
    requestArtists: () => dispatch(requestArtists()),
    requestAlbums: () => dispatch(requestAlbums()),
    requestSongs: () => dispatch(requestSongs())
  }
}

export default connect(mSTP, mDTP)(Search)