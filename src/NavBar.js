import React from "react";

function NavBar({onChangePage}){

    function handleLinkClick(e){
        e.preventDefault()
        onChangePage(e.target.pathname)

    }

    return(
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="/music-page">Music Page</a>
            <a onClick={handleLinkClick} href="/add-music">Add Music</a>
        </nav>
    )

}

export default NavBar;