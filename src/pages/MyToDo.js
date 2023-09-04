
import React, {useCallback, useState} from "react";
import CardList from "../components/card/CardList";
import CardEdit from "../components/card/CardEdit";
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

    const [content, setContent] = useState({
        cardNo: '', title: '', lines: null, createTime: null
    });

    return(
        <div className="MyTodo">
            <MyTodoMenu checkedList={checkedList}></MyTodoMenu>
            <CardList onCheckedItem={onCheckedItem} setContent={setContent}></CardList>
            <CardEdit content={content}></CardEdit>
        </div>
    )

}

export default MyToDo;