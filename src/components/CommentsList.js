import React, { useState } from 'react';
import Comment from "./Comment";

function CommentsList({ comments, removeComment }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  let filteredComments = comments.filter((comment) =>
    comment.user.toLowerCase().includes(search.toLowerCase())
  );

  if (sort) {
    filteredComments.sort((a, b) => b.upvotes - a.upvotes);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by username"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSort(!sort)}>
        {sort ? "Unsort by upvotes" : "Sort by upvotes"}
      </button>
      {filteredComments.map((comment) => (
        <Comment key={comment.id} comment={comment} removeComment={removeComment} />
      ))}
    </div>
  );
}

export default CommentsList;
