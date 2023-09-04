
import React, {useCallback} from 'react';
import "../../styles/Card.css";
import Moment from 'moment';

function Card(props) {

    function changeContents() {
        props.setContent( {
            cardNo: props.cardNo,
            title: props.title,
            lines: props.lines,
            createTime: props.createTime
        });
    }

    return(
        <div className = "Card">
            <input type="checkbox" id={props.cardNo} onChange={(e) => {
              props.onCheckedItem(e.target.checked, e.target.id);
            }} />
            <div className={ props.done ? "CardInner Done" : "CardInner Undone"} onClick={changeContents}>
                <div className="Title">
                    <span>{props.title}</span>
                </div>
                <div className="CardLines">
                    { props.lines.map((line, index) => {
                        return(
                            <div key={line.cardLineNo}>
                                {line.cardLineValue}
                            </div>
                        )
                    })}
                </div>
                <div className="CreatedTime">{Moment(props.createTime).format("YYYY-MM-DD")}</div>
            </div>
        </div>
    );

}

export default Card;
