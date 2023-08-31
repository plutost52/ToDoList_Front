
import React from 'react';
import axios from "axios";

function Done(props) {

    function Done(e) {
        e.preventDefault();
        if (window.confirm("선택한 카드들을 Done으로 바꾸시겠습니까?")) {
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
                    window.location.reload();
                }).catch(err => {
            });
        }
    }

    return(
        <div className = "Done">
            <button onClick={Done}>Done</button>
        </div>
    );

}

export default Done;
