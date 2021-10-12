import { useHistory } from "react-router";
import "./CreditsPage.css";

export default function CreditsPage(): JSX.Element {
    const history = useHistory();
    return (
        <div className="CreditsPage">
            <p> parallax hover cards inspired by <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/andymerskin/pen/XNMWvQ">andymerskin</a></p>
            <p> Clouds background image <a target="_blank" rel="noopener noreferrer" href="https://mocah.org/340048-sunset-clouds-scenery-horizon-art-digital-art.html">mocah.org</a></p>
            <button onClick={() => {
                history.goBack();
            }}>Go back</button>
        </div>
    );
}