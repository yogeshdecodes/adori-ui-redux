import React from 'react';
import Layout from '../components/layout';

import { useSelector } from 'react-redux';

export default function MyActivityPage() {
  const currentSong = useSelector((state) => state.currentSong);
  return (
    <Layout>
      <h1>My activity page</h1>
      <h3>Redux Demo</h3>
      {currentSong ? (
        <h4>You're playing episode - {currentSong}</h4>
      ) : (
        <h4>click on any episode to start listening</h4>
      )}
    </Layout>
  );
}
