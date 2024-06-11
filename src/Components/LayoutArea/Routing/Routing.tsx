import { Route, Routes } from "react-router-dom";
import CreditsPage from "../../CreditsPage/CreditsPage";
import Main from "../Main/Main";
import MyStory from "../MyStory/MyStory";
import {ReactElement} from 'react';

export default function Routing(): ReactElement {
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