import "./Main.css";
import artBurgerImg from '../../../Assets/Images/art-burger-thumbnail.jpg';
import couponAsArtImg from '../../../Assets/Images/coupon-as-art-thumbnail.jpg';
import Skills from "../Skills/Skills";
import ClipText from "../../ClipText/ClipText";
import textBackgroundImg from "../../../Assets/Backgrounds/sunset-clouds.jpg";
import underConstructBackgroundImg from "../../../Assets/Images/under-construct.jpg";
import HoverCard from "../../HoverCard/HoverCard";

export default function Main(): JSX.Element {
    const shadowStyle = `0 1px 1px rgba(0,0,0,0.11), 
                        0 2px 2px rgba(0,0,0,0.11), 
                        0 4px 4px rgba(0,0,0,0.11), 
                        0 6px 8px rgba(0,0,0,0.11),
                        0 8px 16px rgba(0,0,0,0.11)`;
    return (
        <div className="Main">

            <div className="Fixed__container">
                <ClipText
                    text="artur farmanov portfolio"
                    split="whitespace"
                    image={textBackgroundImg}
                    fontSize="4vw"
                    minFontSize="2rem"
                    maxFontSize="4rem"
                    textShadow={shadowStyle}
                />

                <div className="ArturPhoto" />

                <ClipText
                    text="Hi there, My name is Artur, I welcome you in my portfolio website. I'm a junior full stack developer, I encourage you to browse my portfolio and be impressed by my projects ;)"
                    textAlign="justify"
                    fontWeight={600}
                    fontSize="2vw"
                    minFontSize="0.8rem"
                    maxFontSize="1rem"
                    maxWidth="800px"
                    filter="contrast(90%) brightness(60%)"
                    textTransform="unset"
                    image={textBackgroundImg}
                    textShadow={shadowStyle}
                />

                {/* <NavLink className="NavLink__story" to="/story">Get to know more</NavLink> */}

            </div>

            <div className="ContentContainer">
                <ClipText
                    text="projects"
                    image={textBackgroundImg}
                    textShadow={shadowStyle}
                />
                <p>Projects may take up to 5 minutes to load, please be patient</p>
                <div className="ProjectsContainer">
                    <HoverCard
                        marginBottom="2vh"
                        image={artBurgerImg}
                        title="Art Burger"
                        src="https://artburger.herokuapp.com/"
                        apiStack={["React", "TypeScript", "Redux"]}
                    />

                    <HoverCard
                        marginBottom="5vh"
                        image={couponAsArtImg}
                        title="Coupon As Art"
                        src="https://couponasart.herokuapp.com"
                        apiStack={["React", "TypeScript", "Redux", "Axios", "Java", "Spring boot", "Hibernate", "MySQL"]}
                    />

                    <HoverCard
                        marginBottom="5vh"
                        image={underConstructBackgroundImg}
                        title="More underway..."
                        apiStack={["microservices", "spring cloud"]}
                    />
                </div>

                <ClipText
                    text="I have skills in..."
                    image={textBackgroundImg}
                    imageFloat="top"
                    fontSize="5vw"
                    minFontSize="0.9rem"
                    maxFontSize="1.6rem"
                    margin="20px auto 0"
                    textShadow={shadowStyle}
                />
                <Skills />
            </div>
        </div>
    );
}