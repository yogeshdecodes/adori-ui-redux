import { FETCH_CURRENT_SONG } from '../constants/actionTypes';

export const currentSong = (song) => {
  return {
    type: FETCH_CURRENT_SONG,
    payload: song,
  };
};
