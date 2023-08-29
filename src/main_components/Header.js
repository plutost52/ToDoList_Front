
import React from 'react';
import '../styles/Header.css';
import UserInfo from "../components/header/UserInfo";
import Menu from "../components/header/Menu";

function Header() {

    function Header_Left() {
        return (
            <div className = "Header_Left">
                <div className = "Text"></div>
            </div>
        )
    }

    return(
        <div className = "Header">
            <Header_Left />
            <Menu />
            <UserInfo />
        </div>
    );

}

export default Header;
