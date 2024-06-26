import Logo from "../../Logo/Logo";
import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
import "./Layout.css";
import {ReactElement} from 'react';

export default function Layout(): ReactElement {
    const colorPalette = "light";

    return (
        <>
            <div className="Layout" color-palette={colorPalette}>
                <div className="Background__secondary" />
                <div className="Background__main" />
                
                <header>
                    <Logo />
                </header>
                <nav>
                    {/* <Navigation /> getting ready for future release */}
                    <SocialMediaContainer />
                </nav>
                <main >
                    <Routing />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}