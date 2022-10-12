import React from "react";
import MusicListings from "./MusicListings"
import MusicFilter from "./MusicFilter"

function handleMusicList({musicInfo}){

    return (
        <main>
            <MusicFilter musicInfo={musicInfo}/>
            <MusicListings musicInfo={musicInfo}/>
        </main>
    )

}

export default handleMusicList;