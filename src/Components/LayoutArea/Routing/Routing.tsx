import { Redirect, Route, Switch } from "react-router-dom";
import CreditsPage from "../../CreditsPage/CreditsPage";
import Main from "../Main/Main";
import MyStory from "../MyStory/MyStory";

export default function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Switch>
                <Route path="/home" component={Main} exact />
                <Route path="/story" component={MyStory} exact />
                <Route path="/credits" component={CreditsPage} exact />
                <Redirect from="/" to="/home" exact />
            </Switch>
        </div>
    );
}