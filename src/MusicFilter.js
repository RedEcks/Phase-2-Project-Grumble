import React, { useState } from "react";


function handleFilter({musicInfo}){
    console.log("Music Info",musicInfo.genre)
   // const [musicList,setMusicList]=useState([])

    function filter(){

    }

    // function optionMaker(){
        // let songGenres = <option value="All" key="All">All</option>;
        let songDictionary = {};
        let songGenres = musicInfo.map((song) => {
            let songGenre = song.genre;
            if (!songDictionary[songGenre]) {
                songDictionary[songGenre] = true;
                return (<option value={songGenre} key={songGenre}>{songGenre}</option>);
            }
        });
        songGenres.unshift(<option value="All" key="All">All</option>);
    //     return songGenres;
    // }


    return(
        <div className="nav-bar">
            <div className="Filter">
                <select name="filter" onClick={filter}>
                    {/* <option value="All" key="All">All</option> */}
                    {songGenres}
                </select>
            </div>
        </div>
    )


}

export default handleFilter;