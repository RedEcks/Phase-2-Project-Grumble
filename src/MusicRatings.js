import React, { useState } from "react";

function HandleRatings(){
    const [likes, setLikes]= useState(0);
    const [dislikes,setDislikes]= useState(0);

    function handleLikes(){
        setLikes(likes => likes + 1);
    }

    function handleDislikes(){
        setDislikes(dislikes => dislikes + 1);
    }

    return(
        <div className="ratings">
                <button onClick={handleLikes}><img src="https://www.macmillandictionary.com/external/slideshow/full/emoji_thumbs-up_full.jpg" height={25} width={25} alt="like"/></button>
                <span>{likes}</span>
                <button onClick={handleDislikes}><img src="https://www.macmillandictionary.com/external/slideshow/full/emoji_thumbs-down_full.jpg" height={25} width={25} alt="dislike"/></button>
                <span>{dislikes}</span>
        </div>
    )
}

export default HandleRatings;