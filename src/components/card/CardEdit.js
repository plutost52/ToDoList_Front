
import "../../styles/Card.css";
import Moment from 'moment';

function CardEdit(props) {

    return(
        <div className = "CardEdit">
            <div className="Title">
                <input type="text">{props.title}</input>
            </div>
            <div className="CreatedTime">
                {Moment(props.createTime).format("YYYY-MM-DD")}
            </div>
            <div className="CardLines">
                { props.lines != null && props.lines.map((line, index) => {
                    return(
                        <div key={line.cardLineNo}>
                            {line.cardLineValue}
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
