import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <NavLink to="/home"><h1>Artur Farmanov</h1></NavLink>
            <h2>Full Stack Developer</h2>
        </div>
    );
}

export default Header;
