import React from 'react';

function VideoPlayer({ embedUrl }) {
  return (
    <iframe
      width="919"
      height="525"
      src={embedUrl}
      allowFullScreen
      title="Video Player"
    />
  );
}

export default VideoPlayer;
