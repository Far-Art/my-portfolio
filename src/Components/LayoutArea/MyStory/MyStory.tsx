import "./MyStory.css";
import textBackgroundImg from "../../../Assets/Backgrounds/sunset-clouds.jpg";
import ClipText from "../../ClipText/ClipText";
import inJetImg from "../../../Assets/Gallery/InJet.jpg";

export default function MyStory(): JSX.Element {
    const shadowStyle = `0 1px 1px rgba(0,0,0,0.11), 
                        0 2px 2px rgba(0,0,0,0.11), 
                        0 4px 4px rgba(0,0,0,0.11), 
                        0 6px 8px rgba(0,0,0,0.11),
                        0 8px 16px rgba(0,0,0,0.11)`;
    return (
        <div className="MyStory">
            <ClipText
                text="My story"
                fontSize="5vw"
                minFontSize="1.7rem"
                maxFontSize="2.5rem"
                maxWidth="800px"
                filter="contrast(120%) brightness(90%)"
                image={textBackgroundImg}
                textShadow={shadowStyle}
            />
            <p>
                My story starts at military service, where I got an avionics tech position.
                I was responsible for servicing F-16 fighter jets.
            </p>
            <img className="Story_image" height="432px" width="322px" src={inJetImg} alt="me in the jet" />
        </div>
    );
}