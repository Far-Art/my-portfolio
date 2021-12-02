import { Route, Routes } from "react-router-dom";
import CreditsPage from "../../CreditsPage/CreditsPage";
import Main from "../Main/Main";
import MyStory from "../MyStory/MyStory";

export default function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Main />} />
                <Route path="/story" element={<MyStory />} />
                <Route path="/credits" element={<CreditsPage />} />
            </Routes>
        </div>
    );
}