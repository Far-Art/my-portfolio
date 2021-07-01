import Header from "../Header/Header";
import Info from "../Info/Info";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Layout.css";


function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header />
            <SocialMedia/>
            <Info />
            <Main />
            <Skills />
        </div>
    );
}

export default Layout;
