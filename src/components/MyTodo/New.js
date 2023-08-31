
import React from 'react';
import axios from "axios";

function New() {

    function New(e) {
        e.preventDefault();
    }

    return(
        <div className = "New">
            <button onClick={New}>New</button>
        </div>
    );

}

export default New;
