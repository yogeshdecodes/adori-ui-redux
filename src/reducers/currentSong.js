const currentSongReducer = (song = '', { type, payload }) => {
  switch (type) {
    case 'FETCH_CURRENT_SONG':
      return payload;
    default:
      return song;
  }
};

export default currentSongReducer;
