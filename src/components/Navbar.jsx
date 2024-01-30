import React from 'react';
import {NavLink} from "react-router-dom";
import "../App.css"
import {useSelector} from "react-redux";
import logo from "../assets/logo/Apple_Store_logo.svg.png"

const Navbar = () => {
    const product = useSelector(state => state.stateCount.count)
    const click = (i) =>{location.reload(true)}
    return (
        <nav className="nav">
            <ul className="ul">
                <li>
                    <NavLink to="/">market</NavLink>
                </li>
                <li>
                    <NavLink to="/busket">busket</NavLink>
                </li>
            </ul>
            <div className="bus">&#128722;{product}</div>
            <img className="logo" src={logo} alt="apple" onClick={click}/>
        </nav>
    );
};

export default Navbar;