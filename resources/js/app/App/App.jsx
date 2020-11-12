import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";

export default function App() {
    return (
        <Router>
            <Header />

            <main>
                <Switch>
                    <Route exact path="/" children={<Home />} />
                    <Route exact path="/login" children={<Login />} />
                    <Route path="/register" children={<Register />} />
                </Switch>
            </main>
        </Router>
    );
}
