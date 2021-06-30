import Header from "../Header/Header";
import Info from "../Info/Info";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header />
            <Info />
            <ProjectsContainer />
        </div>
    );
}

export default Layout;
