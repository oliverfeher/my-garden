import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
class NavBar extends React.Component
{
    render()
    {
        return (
            <nav>
                <img src={Logo} id="nav-logo" />
                <div id="nav-bar">
                    <Link to={"/dashboard"} id="plant" className="">dashboard</Link>
                    <Link to={"/plant"} id="plant" className="">plant</Link>
                    <Link to={"/history"} id="plant" className="">history</Link>
                    <Link to={"/current"} id="plant" className="">current</Link>
                    <Link to={"/"} onClick={()=>{localStorage.removeItem("token")}} id="plant" className="">logout</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar;