import React from "react";
import MusicCards from "./MusicCards"

function handleMusicListings({musicInfo, results, key}){
    console.log("results from filter",results)
    console.log("key",key)
    let songs=musicInfo.map((song)=><MusicCards key={song.id} song={song}/>)

    return (
        <ul className="cards">{songs}</ul>
    )
}

export default handleMusicListings;