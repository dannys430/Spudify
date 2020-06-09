import {combineReducers} from 'redux';

import PlaylistReducer from './playlist_reducer'
import SongReducer from './song_reducer'

const EntitiesReducer = combineReducers({
  PlaylistReducer,
  SongReducer
});

export default EntitiesReducer;