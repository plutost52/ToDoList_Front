
import React from 'react';
import '../styles/InnerContent.css';
import Main from '../pages/Main';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SharedToDo from "../pages/SharedToDo";
import MyToDo from "../pages/MyToDo";
import Friends from "../pages/Friends";

function InnerContent() {

    return(
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/my" element={<MyToDo />} />
                <Route path="/shared" element={<SharedToDo />} />
                <Route path="/friends" element={<Friends />} />
            </Routes>
    )

}

export default InnerContent;
