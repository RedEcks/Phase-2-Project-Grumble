import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header'
import MusicPage from './MusicPage'
import MusicAdder from './MusicAdder'

function App() {
  const [musicInfo, setMusicInfo]=useState([])

  useEffect(()=>{
    fetch(" http://localhost:4000/music")
      .then((response)=>response.json())
      .then((data)=>setMusicInfo(data))
  },[])

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

  let songDictionary = {};
  let songGenres = [<option value="All" key="All">All</option>];
  musicInfo.forEach((song) => {
      let songGenre = song.genre;
      if (!songDictionary[songGenre]) {
          songDictionary[songGenre] = true;
          songGenres.push(<option value={songGenre} key={songGenre}>{songGenre}</option>);
      }
  });
  console.log("results",results)

  return (
    
    <div className="App">

      <Header/>
      <MusicAdder/>
      <div className="nav-bar">
            <div className="Filter">
                <select name="filter" onClick={handleCategorieChange}>
                    {songGenres}
                </select>
            </div>   
      </div>
      <MusicPage results={results}/>
    </div>
  );
}

export default App;

