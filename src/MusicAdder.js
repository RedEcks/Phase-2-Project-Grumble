import React, {useState} from "react";

function HandleMusicAdder({musicInfo, setMusicInfo}){
    const [newMusicArtist, setNewMusicArtist]=useState("")
    const [newMusicImageURL, setNewMusicImageURL]=useState("")
    const [newMusicAlbum, setNewMusicAlbum]=useState("")
    const [newMusicGenre, setNewMusicGenre]=useState("")

    function handleNewArtist(event){
        setNewMusicArtist(event.target.value)
    }

    function handleNewAlbum(event){
        setNewMusicAlbum(event.target.value)
    }

    function handleNewImageURL(event){
        setNewMusicImageURL(event.target.value)
    }

    function handleNewGenre(event){
        setNewMusicGenre(event.target.value)
    }
    
    
    function handleSubmit(event){
        
        event.preventDefault();
        const newMusicData=  {
            artist: newMusicArtist,
            image: newMusicImageURL,
            album: newMusicAlbum,
            genre: newMusicGenre,
        }
        

        fetch("http://localhost:4000/music",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newMusicData)
        })
            .then((r)=>r.json())
            .then((newItem)=>{setMusicInfo([...musicInfo,newItem])
            })
            alert("Music added Successfully! Return to Music Page.")
    }


    return(
        <div>
            <form>
                <input type="text" name="name" placeholder="Artist/Band" onChange={handleNewArtist} />
                <input type="text" name="image" placeholder="Image URL" onChange={handleNewImageURL}/>
                <input type="text" name="name" placeholder="Album" onChange={handleNewAlbum}/>
                <input type="text" name="name" placeholder="Genre" onChange={handleNewGenre}/>
                <button type="submit" onClick={handleSubmit} >Add Music</button>
            </form>
        </div>
    )
}

export default HandleMusicAdder;