import React, { useState } from "react";
import axios from "axios";

function LoginModal({ setLoginModalOpen, id, title, content, writer }) {

    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");

    function closeModal() {
        setLoginModalOpen(false);
    };

    function EmailHandler(e) {
        e.preventDefault();
        SetEmail(e.target.value);
    };

    function PasswordHandler(e) {
        e.preventDefault();
        SetPassword(e.target.value);
    };

    function Login(e) {
        e.preventDefault();
        const url = "http://localhost:8080/member/login";
        const data = {
            'memberEmail' : Email,
            'memberPwd' : Password
        };
        axios.post(url, data)
            .then(res => {
                if (res.headers['authorization'] != null) {
                    const token = res.headers['authorization'];
                    localStorage.setItem("token", token);
                    localStorage.setItem("memberNo", res.data['data']['memberNo']);
                    localStorage.setItem("memberEmail", res.data['data']['memberEmail']);
                    localStorage.setItem("memberName", res.data['data']['memberName']);
                    localStorage.setItem("memberNickname", res.data['data']['memberNickname']);
                    alert(localStorage.getItem("memberNickname") + "님 반갑습니다.");
                    window.location.reload();
                } else {
                    alert("아이디, 비밀번호를 확인해주세요.");
                }
            }).catch(err => {
        });
    }

    return(
        <div className="LoginModal">
            <button className="Close" onClick={closeModal}>
                X
            </button>
            <form className="LoginForm" onSubmit={Login}>
                <div className="Insert">
                    <label>아이디</label>
                    <input type="text" value={Email} onChange={EmailHandler}></input>
                </div>
                <div className="Insert">
                    <label>비밀번호</label>
                    <input type="password" value={Password} onChange={PasswordHandler}></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default LoginModal;