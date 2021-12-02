import Logo from "../../Logo/Logo";
import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
import "./Layout.css";

export default function Layout(): JSX.Element {
    const colorPalette = "light";

    return (
        <>
            <div className="Layout" color-palette={colorPalette}>
                <div>
                    <div className="Background__secondary_solid" />
                </div>
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