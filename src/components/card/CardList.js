
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from 'axios';

function CardList(props) {

    const [cardList, setCardList] = useState([]);

    useEffect(() => {

        const fetchData = async() => {
            const res = await axios.get("http://localhost:8080/card", { headers : {
                    Authorization: localStorage.getItem("token")
                } } );
            return res.data;
        }

        fetchData().then(res => {
            setCardList(cardList => res.data);
        });

    }, []);

    return(
        <div className="CardList">
            { cardList.map((card, index) => {
                return (
                    <Card
                        onCheckedItem={props.onCheckedItem}
                        key={index}
                        cardNo={card.cardNo}
                        title={card.cardTitle}
                        lines={card.cardLine}
                        done={card.cardDone}
                        createTime={new Date(card.createdAt)}
                        memberNo={card.memberNo} />
                )
            })}
        </div>
    )

}

export default CardList;