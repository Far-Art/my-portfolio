import "./Footer.css";
import packageJson from "../../../../package.json";
import { useNavigate } from "react-router-dom";
import {ReactElement} from 'react';

export default function Footer(): ReactElement {

    const navigate = useNavigate();

    return (
        <div className="Footer">
            <p>{`All rights reserved to © Artur Farmanov`}</p>
            <button onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                navigate("/credits");
            }}>Credits</button>
            <p>app version {packageJson.version}</p>
        </div>
    );
}