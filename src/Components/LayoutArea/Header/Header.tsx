import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header(): JSX.Element {
    return (
        <div className="Header">
            <h3 style={{color:"red"}}>This portfolio will recieve major redesign, expected at 12.10.2021 </h3>
            <NavLink to="/home"><h1>Artur Farmanov</h1></NavLink>
            <h2>Full Stack Developer</h2>
        </div>
    );
}