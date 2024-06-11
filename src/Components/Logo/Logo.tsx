import './Logo.css';
import LogoSvg from '../../Assets/Logo/Logo.svg';
import {ReactElement} from 'react';


export default function Logo(): ReactElement {
  return (
      <div className="Logo">
        <img className="LogoImage" src={LogoSvg} alt="Logo"/>
        <p className="LogoText">artur farmanov</p>
        <p className="LogoTextPortfolio" style={{userSelect: 'none'}}>portfolio</p>
      </div>
  );
}