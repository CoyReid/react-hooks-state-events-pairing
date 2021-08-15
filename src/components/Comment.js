import CommentLikeBtns from "./CommentLikeBtns"

export default function Comment({ user, text, onDeleteComment}) {
    
    function handleClick(){
        onDeleteComment(user)
    }

    return (
        <div>
            <h3>{user}</h3>
            <p>{text}</p>
            <CommentLikeBtns />
            <button onClick={handleClick}>Remove Comment</button>
        </div>
    ) 
}