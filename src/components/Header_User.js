
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


import '../styles/Header.css';
import LoginModal from "./LoginModal";

function Header_User() {

    const token = localStorage.getItem("token");
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    function showModal() {
        setLoginModalOpen(true);
    };

    if (token == null || token == "" || token == "undefined")
        return(
            <div>
                <ul>
                    <li><button onClick={showModal}>Login</button></li>
                    <li>회원가입</li>
                </ul>
                {loginModalOpen && <LoginModal setLoginModalOpen={setLoginModalOpen} />}
            </div>
        )
    else
        return(
            <div>
                <button onClick={Logout}>Logout</button>
            </div>
        );
}

function Logout() {
    window.localStorage.removeItem("token");
    window.location.replace("/");
}

export default Header_User;
