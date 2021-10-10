import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
import SocialMedia from "../SocialMediaContainer/SocialMediaContainer";
import "./Layout.css";


export default function Layout(): JSX.Element {
    const colorPalette = "light";
    return (
        <div className="Layout" color-palette={colorPalette}>


            {/* <SocialMedia /> */}


            <Routing />

            <footer>
                <Footer />
            </footer>
            <section className="Background__main_image"/>
        </div>
    );
}