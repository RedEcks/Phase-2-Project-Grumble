import React from "react";
import MusicCards from "./MusicCards"

function handleMusicListings({musicInfo}){

    return (
        <div>
            <MusicCards musicInfo={musicInfo}/>
        </div>
    )

}

export default handleMusicListings;