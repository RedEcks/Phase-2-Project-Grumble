import React from "react";
import MusicListings from "./MusicListings"
import MusicSearch from "./MusicSearch"

function handleMusicList({musicInfo}){

    return (
        <main>
            <MusicSearch/>
            <MusicListings musicInfo={musicInfo}/>
        </main>
    )

}

export default handleMusicList;