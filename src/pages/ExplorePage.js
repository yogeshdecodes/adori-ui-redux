import React from 'react';
import Layout from '../components/layout';

import { useSelector } from 'react-redux';

export default function ExplorePage() {
  let currentSong = useSelector((state) => state.currentSong);
  // if (!currentSong) {
  //   currentSong = localStorage.getItem('nowPlaying');
  // } else {
  //   localStorage.setItem('nowPlaying', currentSong);
  // }
  return (
    <Layout>
      <h1>Explore page</h1>
      <h3>Redux Demo</h3>
      {currentSong ? (
        <h4>You're playing episode - {currentSong}</h4>
      ) : (
        <h4>click on any episode to start listening</h4>
      )}
    </Layout>
  );
}
