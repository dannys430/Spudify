import {combineReducers} from 'redux';

import UserReducer from './user_reducer';
import PlaylistReducer from './playlist_reducer'
import SongReducer from './song_reducer'
import AlbumReducer from './album_reducer'
import ArtistReducer from './artist_reducer'

const EntitiesReducer = combineReducers({
  users: UserReducer,
  playlists: PlaylistReducer,
  songs: SongReducer,
  albums: AlbumReducer,
  artists: ArtistReducer
});

export default EntitiesReducer;