import React from "react";

function handleMusicAdder(){

    function handleSubmit(){
        console.log("YO")

    }



    return(
        <div>
            <form>
                <input type="text" name="name" placeholder="Artist/Band" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="text" name="name" placeholder="Album" />
                <input type="text" name="name" placeholder="Genre" />
                <button type="submit" onSubmit={handleSubmit}>Add Music</button>
            </form>
        </div>
    )
}

export default handleMusicAdder;