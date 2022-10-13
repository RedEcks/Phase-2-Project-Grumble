import React, { useState } from "react";


function HandleFilter({musicInfo}){
    console.log("Music Info",musicInfo.genre)
   const [musicCategories,setMusicCatagories]=useState("All")

    function handleCategorieChange(event){
        setMusicCatagories(event.target.value)
    }
    console.log("MusicCategories",musicCategories)

    let results = musicInfo;
    if (musicCategories !== 'All') {
        results = musicInfo.filter((song)=>{
            if(song.genre===musicCategories){
                return(song)
            }
        })
    }
    console.log("results",results)

    
    
    let songDictionary = {};
    let songGenres = [<option value="All" key="All">All</option>];
    musicInfo.forEach((song) => {
        let songGenre = song.genre;
        if (!songDictionary[songGenre]) {
            songDictionary[songGenre] = true;
            songGenres.push(<option value={songGenre} key={songGenre}>{songGenre}</option>);
        }
    });
    // songGenres.unshift(<option value="All" key="All">All</option>);
    
    // <ul className="filtered-results">
    //     {results.map((result)=>{
    //         return (<option value={result} key={result}>{result}</option>);
    //     })}
    // </ul>

    return(
        <div className="nav-bar">
            <div className="Filter">
                <select name="filter" onClick={handleCategorieChange}>
                    {songGenres}
                </select>
            </div>   
        </div>
    )


}

export default HandleFilter;