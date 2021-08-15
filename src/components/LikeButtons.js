import React, { useState } from "react";

function LikeButtons ({upvotes, downvotes}) {
    const [votes, setVotes] = useState({
        upVotes: upvotes,
        downVotes: downvotes
    })

    function handleVotes(event) {
        const name = event.target.name;
        let newVotes;
        if (name === "upVotes") {
            newVotes = votes.upVotes + 1;
        } else if (name === "downVotes") {
            newVotes = votes.downVotes + 1;
        }
        setVotes({
            ...votes,
            [name] : newVotes,
        })
    }
    
    return (
        <div>
            <button name="upVotes" onClick={handleVotes}>{votes.upVotes} 👍</button>
            <button name="downVotes" onClick={handleVotes}>{votes.downVotes} 👎</button>
        </div>
    )
}

export default LikeButtons;
