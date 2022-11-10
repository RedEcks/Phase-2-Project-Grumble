import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header'
import MusicPage from './MusicPage'
import MusicAdder from './MusicAdder'
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';

function App() {
  const [musicInfo, setMusicInfo]=useState([])
  const [page, setPage]=useState("/")

  useEffect(()=>{
    fetch(" http://localhost:4000/music")
      .then((response)=>response.json())
      .then((data)=>setMusicInfo(data))
  },[])

  
  const [musicCategories,setMusicCatagories]=useState("All")

   function handleCategorieChange(event){
       setMusicCatagories(event.target.value)
   }

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
  

  return (

    
    <div className="App">
      <Header/>
      <NavBar onChangePage={setPage}/>
      <div className="nav-bar">
                <div className="Filter">
                    <select name="filter" onClick={handleCategorieChange}>
                        {songGenres}
                    </select>
                </div>   
      </div>
      <Routes>
        <Route path="/add-music"  element={<MusicAdder musicInfo={musicInfo}/>} />

        <Route path="/music-page" element={<MusicPage results={results}/>} />
      </Routes>
    </div>
  );
}

export default App;

