import "./Footer.css";
import packageJson from "../../../../package.json";

export default function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <p>{`All rights reserved to © Artur Farmanov`}</p>
            <p>app version {packageJson.version}</p>
        </div>
    );
}