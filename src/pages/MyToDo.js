
import React, {useCallback, useState} from "react";
import CardList from "../components/card/CardList";
import CardEdit from "../components/card/CardEdit";
import MyTodoMenu from "../components/MyTodo/MyTodoMenu";
import axios from "axios";

function MyToDo() {

    const [checkedList, setCheckedList] = useState([]);
    const onCheckedItem = useCallback(
        (checked: boolean, item: string) => {
            if (checked) {
                setCheckedList((prev) => [ ...prev, item ]);
            } else if (!checked) {
                setCheckedList(checkedList.filter((el) => el !== item));
            }
        },
        [checkedList]
    );

    const [cardEditValue, setCardEditValue] = useState();
    const getCardDetails = (cardNo) => {
        const url = "http://localhost:8080/card/" + cardNo;
        const config = { headers : {
                Authorization: localStorage.getItem("token")
            } };
        axios.get(url, config)
            .then(res => {
                setCardEditValue(res.data.data);
            }).catch(err => {

            });
    }

    return(
        <div className="MyTodo">
            <MyTodoMenu checkedList={checkedList}></MyTodoMenu>
            <CardList onCheckedItem={onCheckedItem} getCardDetails={getCardDetails}></CardList>
            <CardEdit content={cardEditValue} getCardDetails={getCardDetails}></CardEdit>
        </div>
    )

}

export default MyToDo;