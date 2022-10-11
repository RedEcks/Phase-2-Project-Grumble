import React from "react";
import MusicRatings from "./MusicRatings"
import MusicDelete from "./MusicDelete"

function handleMusicCards({song}){
    console.log('image',song.image)
   return(
        <li className="card">
            <img className="image" src={song.image} alt={song.artist} />
            <div className="music-info">
                <h3 className="artist-name">{song.artist}</h3>
                <h5 className="album">{song.album}</h5>
                <h5 className="genre">{song.genre}</h5>
                <MusicRatings/>
                <MusicDelete/>
            </div>
        </li>
    )

}


export default handleMusicCards