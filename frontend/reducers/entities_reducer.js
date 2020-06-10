import {combineReducers} from 'redux';

import UserReducer from './user_reducer';
import PlaylistReducer from './playlist_reducer'
import SongReducer from './song_reducer'

const EntitiesReducer = combineReducers({
  users: UserReducer,
  playlists: PlaylistReducer,
  SongReducer
});

export default EntitiesReducer;