import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import MyStory from "../MyStory/MyStory";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={Main} exact/>
                <Route path="/story" component={MyStory} exact/>
            </Switch>
        </div>
    );
}

export default Routing;
