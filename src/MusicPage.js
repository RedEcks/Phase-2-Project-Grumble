import React from "react";
import MusicListings from "./MusicListings"

function handleMusicList({results}){

    return (
        <main>
            <MusicListings musicInfo={results}/>
        </main>
    )

}

export default handleMusicList;