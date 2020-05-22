import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component
{
    render()
    {
        return (
            <nav>
                <Link to={"/dashboard"} id="plant" className="">dashboard</Link>
                <Link to={"/plant"} id="plant" className="">plant</Link>
                <Link to={"/history"} id="plant" className="">history</Link>
                <Link to={"/current"} id="plant" className="">current</Link>
                <Link to={"/logout"} id="plant" className="">logout</Link>
            </nav>
        )
    }
}

export default NavBar;