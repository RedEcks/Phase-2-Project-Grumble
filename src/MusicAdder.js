import React, {useState} from "react";

function HandleMusicAdder({musicInfo}){
    const [newMusicArtist, setNewMusicArtist]=useState("")
    const [newMusicImageURL, setNewMusicImageURL]=useState("")
    const [newMusicAlbum, setNewMusicAlbum]=useState("")
    const [newMusicGenre, setNewMusicGenre]=useState("")
    const [newMusicID, setNewMusicID]=useState(musicInfo.length)

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

    function handleNewId(){
        return setNewMusicID(newMusicID => newMusicID + 1)
    }
    
    
    function handleSubmit(){
        handleNewId()
        //event.preventDefault();
        const newMusicData=  {
            id: newMusicID,
            artist: newMusicArtist,
            image: newMusicImageURL,
            album: newMusicAlbum,
            genre: newMusicGenre,
        }
        console.log("New Music Data", newMusicData)

        fetch("http://localhost:4000/music",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newMusicData)
        })
            .then((r)=>r.json())
            .then((newItem)=>console.log("New Item", newItem))
        
    }


    return(
        <div>
            <form>
                <input type="text" name="name" placeholder="Artist/Band" onChange={handleNewArtist} />
                <input type="text" name="image" placeholder="Image URL" onChange={handleNewImageURL}/>
                <input type="text" name="name" placeholder="Album" onChange={handleNewAlbum}/>
                <input type="text" name="name" placeholder="Genre" onChange={handleNewGenre}/>
                <button type="submit" onClick={handleSubmit}>Add Music</button>
            </form>
        </div>
    )
}

export default HandleMusicAdder;