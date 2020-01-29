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
      autoplay: 1
    }
  };
  return (
    <YouTube videoId={`${youTubeVideo[1]}`} opts={opts} onReady={_onReady} />
  );
};

export default VideoPlayer;
