import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Main.css";
import artBurgerImg from '../../../Assets/Images/art-burger-thumbnail.jpg';
import couponAsArtImg from '../../../Assets/Images/coupon-as-art-thumbnail.jpg';
import MyStory from "../MyStory/MyStory";
import Skills from "../Skills/Skills";
import Info from "../Info/Info";
import ClipText from "../../ClipText/ClipText";
import textBackgroundImg from "../../../Assets/Backgrounds/sunset-clouds.svg";
import MaskedCard from "../../MaskedCard/MaskedCard";

export default function Main(): JSX.Element {
    return (
        <div className="Main">
            {/* <MyStory /> */}

            <ClipText
                text="artur farmanov portfolio"
                split="whitespace"
                image={textBackgroundImg}
                enableShadow={true}
                textShadow={`0 1px 1px rgba(0,0,0,0.11), 
                0 2px 2px rgba(0,0,0,0.11), 
                0 4px 4px rgba(0,0,0,0.11), 
                0 6px 8px rgba(0,0,0,0.11),
                0 8px 16px rgba(0,0,0,0.11)`}
            />

            <div className="ArturPhoto"/>

            {/* <MaskedCard /> */}

            <Info />
            <ClipText
                text="projects"
                image={textBackgroundImg}
                enableShadow={true}
                textShadow={`0 1px 1px rgba(0,0,0,0.11), 
                0 2px 2px rgba(0,0,0,0.11), 
                0 4px 4px rgba(0,0,0,0.11), 
                0 6px 8px rgba(0,0,0,0.11),
                0 8px 16px rgba(0,0,0,0.11)`}
            />
            <div className="ProjectsContainer">
                <ProjectContainer
                    name="Art-Burger"
                    image={artBurgerImg}
                    link="https://artburger.herokuapp.com/"
                />
                <ProjectContainer
                    name="Coupons As Art"
                    image={couponAsArtImg}
                    link="https://artburger.herokuapp.com/"
                />

                <ProjectContainer
                    name="More to come..."
                    image={couponAsArtImg}
                    link="https://artburger.herokuapp.com/"
                    disabled={true}
                />
            </div>

            <Skills />
        </div>
    );
}