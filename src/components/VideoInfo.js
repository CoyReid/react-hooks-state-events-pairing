import LikeButtons from "./LikeButtons";

function VideoInfo({views, createdAt, upvotes, downvotes, commentsView, toggleComments}) {

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: "90rem",
      }}
    />
  );
  
  return (
    <div>
      <p>{views} Views | Uploaded {createdAt}</p>
      <LikeButtons upvotes={upvotes} downvotes={downvotes}/>
      <br />
      <button onClick={toggleComments}>{commentsView ? "Hide Comments" : "Show Comments"}</button>
      <ColoredLine color="black"/>
    </div>
  )
}

export default VideoInfo;
