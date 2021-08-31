import React from 'react';
import { msToTime, formatDate } from '../../helper/timestamp.js';

import { currentSong } from '../../actions/song';

import { useDispatch } from 'react-redux';

export default function EpisodeCard({ episodeData }) {
  const dispatch = useDispatch();

  const timestamp = msToTime(episodeData.durationMillis);
  const rawDate = new Date(episodeData.publishedOn);
  const publishDate = formatDate(rawDate);
  const podcastImage = episodeData.image.urls.full;
  // const shareLink = `https://shows.listenboise.com/show/not-the-way-i-planned-R9A8Hsu1AaBpWYdN/episode/+${episodeData.slug}`;
  return (
    <div className="episode-container">
      <div className="episode-image-container">
        <img width="100%" alt="episode" src={podcastImage}></img>
      </div>

      <div className="showCardMetaData custom-border ">
        <div className="play-container">
          <div
            className="play-icon"
            onClick={() => dispatch(currentSong(episodeData.name))}
          >
            <span>
              <i className="fas fa-play"></i>
            </span>
          </div>
          <div className="namedate-main-container">
            <h3>
              <a href="/featured">{episodeData.name}</a>
            </h3>
            <div className="timedate-container">
              <span>{timestamp} · </span>
              <span>{publishDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
