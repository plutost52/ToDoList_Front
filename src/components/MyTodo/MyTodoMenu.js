
import React from 'react';
import New from './New';
import Done from './Done';
import Share from './Share';
import Delete from './Delete';
import '../../styles/MyTodo.css';

function MyTodoMenu(props) {

    return(
        <div className = "MyTodoMenu">
            <ul>
                <li><New /></li>
                <li><Done checkedList={props.checkedList} /></li>
                <li><Share checkedList={props.checkedList} /></li>
                <li><Delete checkedList={props.checkedList} /></li>
            </ul>
        </div>
    );

}

export default MyTodoMenu;
