
import React from 'react';
import '../styles/Header.css';
import Header_User from "../components/Header_User";
import LoginModal from "../components/LoginModal";
import {Link} from "react-router-dom";

function Header() {

    function Header_Left() {
        return (
            <div className = "Header_Left">
                <div className = "Text"></div>
            </div>
        )
    }

    function Header_Center() {
        return (
            <div className = "Header_Center">
                <div className = "Logo"></div>
                <div className = "Menu">
                    <div className = "Inner"><Link to="/my">My ToDo</Link></div>
                    <div className = "Inner"><Link to="/shared">Shared ToDo</Link></div>
                    <div className = "Inner"><Link to="/friends">Friends</Link></div>
                </div>
            </div>
        )
    }

    function Header_Right() {
        return (
            <div className="Header_Right">
                <Header_User />
            </div>
        )
    }

    return(
        <div className = "Header">
            <Header_Left />
            <Header_Center />
            <Header_Right />
        </div>
    );

}

export default Header;
