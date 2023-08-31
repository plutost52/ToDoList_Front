
import React from 'react';
import axios from "axios";

function Share(props) {

    function Share(e) {
        e.preventDefault();
        const url = "http://localhost:8080/card/done";
        const data = {
            'cardDone' : true,
            'cardNo' : props.checkedList
        };
        const config = { headers : {
                Authorization: localStorage.getItem("token")
            } };
        axios.put(url, data, config)
            .then(res => {
                console.log(res);
            }).catch(err => {
        });
    }

    return(
        <div className = "Share">
            <button onClick={Share}>Share</button>
        </div>
    );

}

export default Share;
