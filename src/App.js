import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import MusicCards from './MusicCards'
import MusicSearch from './MusicSearch'

function App() {
  const [musicInfo, setMusicInfo]=useState([])

  useEffect(()=>{
    fetch(" http://localhost:4000/music")
      .then((response)=>response.json())
      .then((data)=>console.log("data",data))
  },[])

  return (
    <div className="App">
      <Header/>
      <MusicSearch/>
      <MusicCards/>
    </div>
  );
}

export default App;

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}