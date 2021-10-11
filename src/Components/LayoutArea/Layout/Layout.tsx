import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
import "./Layout.css";


export default function Layout(): JSX.Element {
    const colorPalette = "light";
    return (
        <div className="Layout" color-palette={colorPalette}>
            <SocialMediaContainer />
            <Routing />
            <Footer />
            <section>
                <div className="Background__secondary_solid" />
                <div className="Background__main_image" />
            </section>
        </div>
    );
}