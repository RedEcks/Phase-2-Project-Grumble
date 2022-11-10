import React from "react";
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <nav>
            <ul>
                <span><Link to="/music-page">Music Page</Link></span>
                <span><Link to="/add-music">Add Music</Link></span>
            </ul>
        </nav>
    )

}

export default NavBar;