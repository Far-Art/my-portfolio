import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import SocialMedia from "../SocialMediaContainer/SocialMediaContainer";
import "./Layout.css";


export default function Layout(): JSX.Element {
    return (
        <div className="Layout">

            {/* <Header /> */}


                {/* <SocialMedia /> */}


                <Routing />

            <footer>
                <Footer />
            </footer>
        </div>
    );
}