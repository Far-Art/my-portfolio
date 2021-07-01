import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import "./Main.css";
import projectImg from '../../../Assets/Images/art-burger-preview.jpg';
import projectImg2 from '../../../Assets/Images/messi.jpg';


function Main(): JSX.Element {
    return (
        <div className="Main">
			<h2>My Projects</h2>
            <ProjectsContainer 
                name="Art-Burger" 
                image={projectImg} 
                link="https://artburger.herokuapp.com/"
                disabled={false} 
            />
            <ProjectsContainer 
                name="The Best Player" 
                image={projectImg2} 
                link="https://best-player-itw.herokuapp.com/"
                disabled={false} 
            />
            <ProjectsContainer 
                name="Coupon System" 
                image={""} 
                link="https://artburger.herokuapp.com/"
                disabled={true}
            />
        </div>
    );
}

export default Main;
