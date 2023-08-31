
import React from 'react';
import axios from "axios";

function Delete(props) {

    function Delete(e) {
        e.preventDefault();
        if (window.confirm("선택한 카드들을 정말 삭제하시겠습니까?")) {
            const url = "http://localhost:8080/card";
            axios.delete(url, { data : props.checkedList, headers : { Authorization: localStorage.getItem("token") }})
                .then(res => {
                    alert("정상적으로 삭제되었습니다.");
                    window.location.reload();
                }).catch(err => {
                    console.log(err);
                    alert("삭제에 실패하였습니다.");
            });
        }
    }

    return(
        <div className = "Delete">
            <button onClick={Delete}>Delete</button>
        </div>
    );

}

export default Delete;
