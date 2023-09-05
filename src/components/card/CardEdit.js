
import "../../styles/Card.css";
import React, { useState } from "react";
import Moment from 'moment';
import axios from "axios";

function CardEdit(props) {

    const [ lineValue, changeLineValue ] = useState();

    function saveTitle(cardNo, e) {
        if (cardNo != null && e != null) {
            e.preventDefault();
            const url = "http://localhost:8080/card/" + cardNo;
            const data = {
                'cardTitle' : e.target.value
            };
            const config = { headers : {
                    Authorization: localStorage.getItem("token")
                } };
            axios.put(url, data, config)
                .then(res => {
                    props.getCardDetails(props.content.cardNo);
                }).catch(err => {
            });
        }
    }

    function changeInputLineValue(text) {
        changeLineValue(text);
    }

    function saveLine(cardNo, e) {
        if (cardNo != null && e != null) {
            e.preventDefault();
            const url = "http://localhost:8080/cardLine";
            const data = {
                'cardNo' : cardNo,
                'cardLineValue' : lineValue
            };
            const config = { headers : {
                    Authorization: localStorage.getItem("token")
                } };
            axios.post(url, data, config)
                .then(res => {
                    props.getCardDetails(cardNo);
                    changeInputLineValue("");
                }).catch(err => {
            });
        }
    }

    return(
        <div className = "CardEdit">
            <div className="Title">
                <input type="text" defaultValue={props.content != null ? props.content.cardTitle : ""} onBlur={(e) => saveTitle(props.content.cardNo, e)} />
            </div>
            <div className="CreatedTime">
                {props.content != null && Moment(props.content.createdAt).format("YYYY-MM-DD")}
            </div>
            <div className="CardLines">
                { props.content != null && props.content.cardLine.map((line, index) => {
                    return(
                        <div className="CardLine" key={line.cardLineNo}>
                            <div className="CheckBox">
                                <input type="checkbox"></input>
                            </div>
                            <div className="Text" defaultValue={line.cardLineValue} onClick={(e) => changeInputLineValue(e.target.innerText)}>
                                {line.cardLineValue}
                            </div>
                            <div className="Delete">
                                X
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="CardLineInput">
                <input type="text" onChange={(e) => changeInputLineValue(e.target.value)} defaultValue={lineValue || ""}></input>
            </div>
            <div className="Menu">
                <button onClick={(e) => saveLine(props.content ? props.content.cardNo : "", e)}>저장</button>
            </div>
            <div className="SharedList">
            </div>
        </div>
    );

}

export default CardEdit;
