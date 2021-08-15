import {useState} from "react";
import Comment from "./Comment";
import Filter from "./Filter";


function CommentList({allComments, commentsView, onDeleteComment}) {
    const [optionChange, setOptionChange] = useState("All");
    const [search, setSearch] = useState("");

    function handleOptionChange(event) {
        setOptionChange(event.target.value)
    }

    const currentComments = allComments.map((comment) => {
        return (
            <Comment 
                key={comment.id}
                user={comment.user}
                text={comment.comment}
                onDeleteComment={onDeleteComment}
            />
        )
    })

    const commentsToDisplay = currentComments
    .filter((comment) => optionChange === "All" || comment.key === optionChange)
    .filter((comment) => comment.props.user.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div>
            {commentsView ? (
                <>
                    <h2>{allComments.length} Comments</h2>
                    <Filter onOptionChange={handleOptionChange} onSearchChange={setSearch} search={search}/>
                    {commentsToDisplay}
                </>
            ) : null}
        </div>
    )
}

export default CommentList;