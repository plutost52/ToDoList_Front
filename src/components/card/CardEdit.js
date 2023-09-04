
import "../../styles/Card.css";
import Moment from 'moment';

function CardEdit(props) {

    return(
        <div className = "CardEdit">
            <div className="Title">
                <input type="text" defaultValue={props.content.title}/>
            </div>
            <div className="CreatedTime">
                {props.content.createTime != null && Moment(props.content.createTime).format("YYYY-MM-DD")}
            </div>
            <div className="CardLines">
                { props.content.lines != null && props.content.lines.map((line, index) => {
                    return(
                        <div className="CardLine" key={line.cardLineNo}>
                            <div className="CheckBox">
                                <input type="checkbox"></input>
                            </div>
                            <div className="Text">
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
                <input type="text"></input>
            </div>
            <div className="Menu">
                <button>저장</button>
            </div>
            <div className="SharedList">
            </div>
        </div>
    );

}

export default CardEdit;
