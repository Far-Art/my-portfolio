import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Main.css";
import artBurgerImg from '../../../Assets/Images/art-burger-thumbnail.jpg';
import couponAsArtImg from '../../../Assets/Images/coupon-as-art-thumbnail.jpg';
import MyStory from "../MyStory/MyStory";
import Skills from "../Skills/Skills";
import Info from "../Info/Info";

export default function Main(): JSX.Element {
    return (
        <div className="Main">
            {/* <MyStory /> */}
            <Info />

            <h2>My Projects</h2>
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