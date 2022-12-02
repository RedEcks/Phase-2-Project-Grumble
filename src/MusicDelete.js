import React from "react";


function handleDelete({song}){

    function deleteCard(){
        console.log("Hi")
        fetch(`http://localhost:4000/music/${song.id}`,{
            method: "DELETE",
        })
            .then((r)=>r.json())
            //.then(()=>console.log(window.location.reload(false)))
    }

    return( 
        <div className="delete">
            <button>
                <img onClick={deleteCard} src="https://us.123rf.com/450wm/markolpakov/markolpakov1910/markolpakov191000086/131424490-trash-can-black-delete-button-icon-vector-illustration.jpg?ver=6" height={25} width={25} alt="X"/>
            </button>
        </div>
    )
}

export default handleDelete;