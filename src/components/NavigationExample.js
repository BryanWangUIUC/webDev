import React from "react";
import HelloWorld from "../hello";
import Todo from "./Todo";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Login from "./Login";

  const NavigationExample = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello" element={<HelloWorld/>} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                </Routes>
                <Routes>
                    <Route path="/todo" element={<Todo/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default NavigationExample;