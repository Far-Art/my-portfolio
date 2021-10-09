import { CSSProperties, useState } from "react";
import "./HoverCard.css";

interface HoverCardProps {
    image: string;
    title?: string;
    apiStack?: string[];
}

export default function HoverCard(props: HoverCardProps): JSX.Element {

    const [containerStyle, setContainerStyle] = useState<CSSProperties>({});

    const [imageStyle, setImageStyle] = useState<CSSProperties>({});

    const [titleStyle, setTitleStyle] = useState<CSSProperties>({});

    const imageTranslade3d = "translate3d(0, 0, -300px)";

    const titleTranslade3d = "translate3d(0, 0, 60px)";

    const transitionOnMouseMove = "transform 200ms ease-out";

    const transitionOnLeave = "transform 1s ease-out";

    const returnToOrigin: CSSProperties = { transform: `rotateX(${0}deg) rotateY(${0}deg)`, transition: transitionOnLeave };

    const maxDeg = 18;

    let returnToOriginTimeout: NodeJS.Timeout;

    function mouseMoveHandler(event: any) {
        // get target boundaries
        const rect = event.target.getBoundingClientRect();

        // try to get touch coordinates, else get mouse coordinates
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;

        // calc boundaries      
        let boundaryX = (rect.top + rect.height / 2) - clientY;
        let boundaryY = (rect.left + rect.width / 2) - clientX;

        const degY = Math.min(boundaryY * -0.09, maxDeg);
        const degX = Math.min(boundaryX * 0.09, maxDeg);

        // define styles
        const containerStyle: CSSProperties = { transform: `rotateX(${degX}deg) rotateY(${degY}deg)`, transition: transitionOnMouseMove }
        const titleStyle: CSSProperties = { transform: `rotateX(${degX}deg) rotateY(${degY}deg) translate3d(0, 0, 60px)`, transition: transitionOnMouseMove };
        const imageStyle: CSSProperties = { transform: `rotateX(${degX * 0.6}deg) rotateY(${degY * 0.6}deg) translate3d(0, 0, -300px)`, transition: transitionOnMouseMove }

        //set styles
        setContainerStyle(containerStyle);
        setTitleStyle(titleStyle);
        setImageStyle(imageStyle);
    }

    return (
        <div
            className="HoverCardField"
            onMouseEnter={() => clearTimeout(returnToOriginTimeout)}
            onTouchMove={(event) => mouseMoveHandler(event)}
            onMouseMove={(event) => mouseMoveHandler(event)}
            onTouchEnd={() => returnToOriginTimeout = setTimeout(() => {
                setContainerStyle(returnToOrigin);
                setImageStyle({ transform: returnToOrigin.transform + ` ${imageTranslade3d}`, transition: transitionOnLeave });
                setTitleStyle({ transform: returnToOrigin.transform + ` ${titleTranslade3d}`, transition: transitionOnLeave });
            }, 1700)}
            onMouseOut={() => returnToOriginTimeout = setTimeout(() => {
                setContainerStyle(returnToOrigin);
                setImageStyle({ transform: returnToOrigin.transform + ` ${imageTranslade3d}`, transition: transitionOnLeave });
                setTitleStyle({ transform: returnToOrigin.transform + ` ${titleTranslade3d}`, transition: transitionOnLeave });
            }, 1700)}>
            <div
                className="HoverCard__container"
                style={containerStyle}>
                <div
                    className="HoverCard__image"
                    style={{ ...imageStyle, background: `url(${props.image})`, backgroundSize: "90%", backgroundPosition: "center" }} />

            </div>
            <div
                className="HoverCard__title"
                style={titleStyle}>
                {props.title}
                <div
                    className="HoverCard__apistack"
                >{props.apiStack && props.apiStack.map((stack, index) => <p key={index}>{stack}</p>)}</div>
            </div>

        </div>
    );
}