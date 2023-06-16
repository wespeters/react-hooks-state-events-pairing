import React, { useState } from 'react';
import videoData from "../data/video.js";
import VideoPlayer from "./VideoPlayer";
import VideoDetails from "./VideoDetails";
import CommentsList from "./CommentsList";

function App() {
  const [video, setVideo] = useState(videoData);
  const [comments, setComments] = useState(videoData.comments);
  const [showComments, setShowComments] = useState(true);

  const removeComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="App">
      <VideoPlayer embedUrl={video.embedUrl} />
      <VideoDetails video={video} setVideo={setVideo} />
      {showComments && <CommentsList comments={comments} removeComment={removeComment} />}
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
    </div>
  );
}

export default App;
