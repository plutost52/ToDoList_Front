
import React from 'react';
import './styles/App.css';
import Header from "./main_components/Header";
import InnerContent from "./main_components/InnerContent";
import Footer from "./main_components/Footer";


import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <InnerContent />
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
