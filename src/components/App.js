import video from "../data/video";
import React, { useState } from "react";
import VideoInfo from "./VideoInfo"
import CommentList from "./CommentList"
import Video from "./Video.js";

function App() {
  const [commentsView, setCommentsView] = useState(true)
  const [comments, setComments] = useState(video.comments)
  
  function handleDeleteComment(deletedCommentUser) {
    setComments(comments.filter((comment) => comment.user !== deletedCommentUser))
  }

  function toggleComments() {
    setCommentsView(!commentsView)
  }

  return (
    <div className="App">
      <Video {...video}/>
      <VideoInfo {...video} commentsView={commentsView} toggleComments={toggleComments}/>
      <CommentList {...video} commentsView={commentsView} onDeleteComment={handleDeleteComment} allComments={comments}/>
    </div>
  );
}

export default App;
