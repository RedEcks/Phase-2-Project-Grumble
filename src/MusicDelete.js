import React, { useState } from "react";


function handleDelete(){

    function deleteCard(){
        console.log("Hi")
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