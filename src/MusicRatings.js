import React from "react";

function handleRatings(){
    const [likes, setLikes]=useState([0])
    const [dislikes,setDislikes]=useState([0])

    function handlelikes(){
        setLikes(likes + 1)
    }

    function handleDislikes(){
        setDislikes(dislikes + 1)
    }

    return(
        <div className="ratings">
            <div className="like" onClick={handlelikes}></div>
            <div className="dislike" onClick={handleDislikes}></div>
        </div>
    )
}

export default handleRatings;