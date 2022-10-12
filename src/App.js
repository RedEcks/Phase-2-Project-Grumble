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

  return (
    <div className="App">
      <Header/>
      <MusicAdder/>
      <MusicPage musicInfo={musicInfo}/>
    </div>
  );
}

export default App;

