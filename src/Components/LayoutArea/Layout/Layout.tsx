import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import SocialMedia from "../SocialMediaContainer/SocialMediaContainer";
import "./Layout.css";


export default function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <nav>
                <SocialMedia />
            </nav>
            <main>
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}