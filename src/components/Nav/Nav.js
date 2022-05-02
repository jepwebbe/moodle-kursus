import React from "react"
import { Link } from "react-router-dom"
import "./Nav.scss"

export const Nav = () => {
    return (
    <nav>
        <ul>
            <li><Link to="/frontpage">FORSIDE</Link></li>
            <li><Link to="/productpage">PRODUKTER</Link></li>
            <li>bageriet</li>
            <li><Link to="/contactpage">KONTAKT</Link></li>
            <li><Link to="/loginpage">LOGIN</Link></li>
        </ul>
    </nav>
    )
}