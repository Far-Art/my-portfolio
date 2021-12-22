import "./Logo.css";
import LogoSvg from "../../Assets/Logo/Logo.svg";

export default function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img className="LogoImage" src={LogoSvg} alt="Logo"/>
            <p className="LogoText">artur farmanov</p>
            <p className="LogoTextPortfolio">portfolio</p>
        </div>
    );
}