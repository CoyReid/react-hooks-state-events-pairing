import React, { useState } from "react";

function CommentLikeBtns () {
    const [likes, setLikes] = useState({
        likes: 0,
        dislikes: 0
    })

    function handleLikes(event) {
        const name = event.target.name;
        let newLikes;
        if (name === "likes") {
            newLikes = likes.likes + 1;
        } else if (name === "dislikes") {
            newLikes = likes.dislikes + 1;
        }
        setLikes({
            ...likes,
            [name] : newLikes,
        })
    }
    
    return (
        <div>
            <button name="likes" onClick={handleLikes}>{likes.likes} 👍</button>
            <button name="dislikes" onClick={handleLikes}>{likes.dislikes} 👎</button>
        </div>
    )
}

export default CommentLikeBtns;