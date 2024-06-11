import React, {ReactElement} from 'react';
import "./Navigation.css";

interface NavigationProps {
    ref?: React.RefObject<HTMLElement>;
}
export default function Navigation(props: NavigationProps): ReactElement {
    const navItems = ["home", "projects", "skills", "about"];

    // const myRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: React.MouseEvent | React.TouchEvent) => {
        if (props.ref?.current) {
            console.log(props.ref.current)
            props.ref.current.scrollIntoView();
        }
        // window.scrollTo({
        //     top: 2000,
        //     behavior: "smooth"
        // })
    }

    return (
        <div className="Navigation">
            {/* {navItems.map((item, index) => <a href={`#${item}`} key={index}>{item}</a>)} */}
            {navItems.map((item, index) => <p onClick={(event) => { handleClick(event) }} key={index}>{item}</p>)}
        </div>
    );
}