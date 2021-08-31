import React from 'react';
import EpisodeCard from './EpisodeCard';

import ShowInfo from './ShowInfo';
import Skeleton from 'react-loading-skeleton';

import { useSelector } from 'react-redux';

export default function ShowAllEpisodes() {
  const posts = useSelector((state) => state.posts);
  let currentSong = useSelector((state) => state.currentSong);
  if (!currentSong) {
    currentSong = localStorage.getItem('nowPlaying');
  } else {
    localStorage.setItem('nowPlaying', currentSong);
  }

  return (
    <div className="mainContainer">
      {posts ? (
        <>
          <ShowInfo showData={posts.show} />
          <h2>Episodes</h2>
          <section className="episode-gallery">
            {posts.episodes.map((episode) => {
              return (
                <EpisodeCard
                  key={episode.uid}
                  episodeData={episode}
                ></EpisodeCard>
              );
            })}
          </section>
          <h3>Redux Demo</h3>
          {currentSong ? (
            <h4>You're playing episode - {currentSong}</h4>
          ) : (
            <h4>click on any episode to start listening</h4>
          )}
        </>
      ) : (
        <div>
          <div className="skeleton-container">
            <Skeleton height={419} width={342} />
            <Skeleton count={5} />
          </div>
        </div>
      )}
    </div>
  );
}
