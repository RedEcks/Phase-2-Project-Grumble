import React from "react";

function handleMusicCards({song}){
   return(
        <li className="card">
            <img className="image" src={song.image} alt={song.artist} />
            <h3 className="artist-name">{song.artist}</h3>
            <h5 className="album">{song.album}</h5>
            <h5 className="genre">{song.genre}</h5>
        </li>
    )

}


export default handleMusicCards