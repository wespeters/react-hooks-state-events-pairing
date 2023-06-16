import React from 'react';

function VideoDetails({ video, setVideo }) {
  const handleUpVote = () => {
    setVideo({
      ...video,
      upvotes: video.upvotes + 1
    });
  };

  const handleDownVote = () => {
    setVideo({
      ...video,
      downvotes: video.downvotes + 1
    });
  };

  return (
    <div>
      <h2>{video.title}</h2>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleUpVote}>👍 {video.upvotes}</button>
      <button onClick={handleDownVote}>👎 {video.downvotes}</button>
    </div>
  );
}

export default VideoDetails;
