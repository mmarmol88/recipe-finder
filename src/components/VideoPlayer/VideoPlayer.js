import React from 'react';
import YouTube from 'react-youtube';

//starter code from npm react-youtube
//website https://www.npmjs.com/package/react-youtube
const VideoPlayer = ({ youTubeVideo }) => {
  function _onReady(event) {
    event.target.pauseVideo();
  }
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      host: 'https://recipe-finder-app20.herokuapp.com/',
      enablejsapi: 1,
      passive: true
    }
  };
  return (
    <YouTube videoId={`${youTubeVideo[1]}`} opts={opts} onReady={_onReady} />
  );
};

// export default VideoPlayer;
