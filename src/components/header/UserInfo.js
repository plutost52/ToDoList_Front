
import React, { useState } from 'react';

import '../../styles/Header.css';
import LoginModal from "./LoginModal";

function UserInfo() {

    const token = localStorage.getItem("token");
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    function showModal() {
        setLoginModalOpen(true);
    };

    function Logout() {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("memberNo");
        window.localStorage.removeItem("memberEmail");
        window.localStorage.removeItem("memberName");
        window.localStorage.removeItem("memberNickname");
        window.location.replace("/");
    };

    if (token == null || token === "" || token === "undefined")
        return(
            <div className = "UserInfo">
                <ul>
                    <li><button onClick={showModal}>Login</button></li>
                    <li>회원가입</li>
                </ul>
                {loginModalOpen && <LoginModal setLoginModalOpen={setLoginModalOpen} />}
            </div>
        )
    else
        return(
            <div className = "UserInfo">
                <ul>
                    <li><button onClick={Logout}>Logout</button></li>
                </ul>
            </div>
        );
}

export default UserInfo;
