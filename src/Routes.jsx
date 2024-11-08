import React from "react";
import Header from "./assets/Components/JSX/Header";
import Home from "./assets/Components/JSX/Home";
import Footer from "./assets/Components/JSX/Footer";
import Instrumentos from "./assets/Components/JSX/Instrumentos";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function AppRoutes(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Instrumentos" element={<Instrumentos />}></Route>
            </Routes>
        </Router>


    )
}

export default AppRoutes