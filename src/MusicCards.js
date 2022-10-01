import React from "react";

function handleMusicCards({song}){
   return(
        <li className="card">
            <p>{song.artist}</p>
        </li>
    )

}


export default handleMusicCards