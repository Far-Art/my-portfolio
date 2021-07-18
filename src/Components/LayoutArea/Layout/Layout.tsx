import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Main from "../Main/Main";
import MyStory from "../MyStory/MyStory";
import Routing from "../Routing/Routing";
import Skills from "../Skills/Skills";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Layout.css";


function Layout(): JSX.Element {
    return (
        <BrowserRouter>
            <div className="Layout">
                <header>
                    <Header />
                </header>
                <nav>
                    <SocialMedia/>
                </nav>
                <main>
                    <Routing />
                    <MyStory/>
                    <Info />
                    <Main />
                    <Skills />
                </main>
                <footer>
                    <Footer/>
                </footer>
                
            </div>
        </BrowserRouter>
    );
}

export default Layout;
