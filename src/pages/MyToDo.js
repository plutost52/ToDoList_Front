
import React, {useCallback, useState} from "react";
import CardList from "../components/card/CardList";
import MyTodoMenu from "../components/MyTodo/MyTodoMenu";

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

    return(
        <div className="MyTodo">
            <MyTodoMenu checkedList={checkedList}></MyTodoMenu>
            <CardList onCheckedItem={onCheckedItem}></CardList>
        </div>
    )

}

export default MyToDo;