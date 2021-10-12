import "./Footer.css";
import packageJson from "../../../../package.json";
import { useHistory } from "react-router-dom";

export default function Footer(): JSX.Element {

    const history = useHistory();

    return (
        <div className="Footer">
            <p>{`All rights reserved to © Artur Farmanov`}</p>
            <button onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                history.push("/credits");
            }}>Credits</button>
            <p>app version {packageJson.version}</p>
        </div>
    );
}