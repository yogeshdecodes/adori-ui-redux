import currentSongReducer from './currentSong';
import postReducer from './posts';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  currentSong: currentSongReducer,
  posts: postReducer,
});

export default allReducers;
