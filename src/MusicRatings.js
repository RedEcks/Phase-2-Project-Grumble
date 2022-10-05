import React, { useState } from "react";

function HandleRatings(){
    const [likes, setLikes]= useState(0);
    const [dislikes,setDislikes]= useState(0);

    function handleLikes(){
        setLikes(likes + 1);
    }

    function handleDislikes(){
        setDislikes(dislikes + 1);
    }

    return(
        <div className="ratings">
                <button onClick={handleLikes}>Like</button>
                <p>{likes}</p>
                <button onClick={handleDislikes}>Dislike</button>
                <p>{dislikes}</p>
        </div>
    )
}

export default HandleRatings;