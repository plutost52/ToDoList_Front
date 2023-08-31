
import React from 'react';
import '../../styles/Header.css';
import {Link} from "react-router-dom";

function Menu() {

    return(
        <div className = "Menu">
            <div className = "Logo"></div>
            <div className = "MenuList">
                <div className = "Inner"><Link to="/my">My ToDo</Link></div>
                <div className = "Inner"><Link to="/shared">Shared ToDo</Link></div>
                <div className = "Inner"><Link to="/friends">Friends</Link></div>
            </div>
        </div>
    );

}

export default Menu;
