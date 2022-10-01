import React from "react";
import MusicCards from "./MusicCards"

function handleMusicListings({musicInfo}){

    let songs=musicInfo.map((song)=><MusicCards song={song}/>)

    return (
        <ul className="cards">{songs}</ul>
    )

}

export default handleMusicListings;