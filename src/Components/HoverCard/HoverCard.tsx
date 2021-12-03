import { CSSProperties, MouseEvent, TouchEvent, useEffect, useState } from "react";
import "./HoverCard.css";

interface HoverCardProps {
    image: string;
    title?: string;
    apiStack?: string[];
    src?: string;
    marginBottom?: string;
}

export default function HoverCard(props: HoverCardProps): JSX.Element {

    const [fieldStyle, setFieldStyle] = useState<CSSProperties>({});

    const [containerStyle, setContainerStyle] = useState<CSSProperties>({});

    const [imageStyle, setImageStyle] = useState<CSSProperties>({});

    const [titleStyle, setTitleStyle] = useState<CSSProperties>({});

    const imageTranslade3d = "translate3d(0, 0, -200px)";

    const titleTranslade3d = "translate3d(0, 0, 60px)";

    const transitionOnLeave = "transform 1s cubic-bezier(.42,.01,.56,1.02)";

    const returnToOrigin: CSSProperties = { transform: `rotateX(${0}deg) rotateY(${0}deg)`, transition: transitionOnLeave };

    const maxYDeg = 7; // determines maximum rotation degree for Y
    const maxXDeg = 7; // determines maximum rotation degree for X
    const rotationSensivity = 0.05; // determines how fast rotation vill occurr
    const toOriginTimeoutMillis = 1300; // milliseconds before card return to original position

    // let returnToOriginTimeout: NodeJS.Timeout;

    useEffect(() => {
        if (props.marginBottom) {
            setFieldStyle({ marginBottom: props.marginBottom });
        }
    }, [props.marginBottom]);

    const mouseMoveHandler = (event: any) => {
        // get target coordinates
        const rect = event.target.getBoundingClientRect();

        // try to get touch coordinates, else get mouse coordinates
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;

        // calc offsets      
        const offsetX = Math.round((rect.top + rect.height / 2) - clientY);
        const offsetY = Math.round(-((rect.left + rect.width / 2) - clientX));

        // set rotation degree
        let rotationDegY = offsetY > 0 ? Math.min(offsetY * rotationSensivity, maxYDeg) : Math.max(offsetY * rotationSensivity, maxYDeg * -1);
        let rotationDegX = offsetX > 0 ? Math.min(offsetX * rotationSensivity, maxXDeg) : Math.max(offsetX * rotationSensivity, maxXDeg * -1);

        //set styles
        setContainerStyle({ transform: `rotateX(${rotationDegX}deg) rotateY(${rotationDegY}deg)` });
        setTitleStyle({ transform: `rotateX(${rotationDegX}deg) rotateY(${rotationDegY}deg) ${titleTranslade3d}` });
        setImageStyle({ transform: `rotateX(${rotationDegX}deg) rotateY(${rotationDegY}deg) ${imageTranslade3d}` });
    }

    let returnToOriginTimeout = () => setTimeout(() => {
        setContainerStyle(returnToOrigin);
        setImageStyle({ transform: returnToOrigin.transform + ` ${imageTranslade3d}`, transition: transitionOnLeave });
        setTitleStyle({ transform: returnToOrigin.transform + ` ${titleTranslade3d}`, transition: transitionOnLeave });
    }, toOriginTimeoutMillis);

    return (
        <div
            className="HoverCardField"
            style={{ ...fieldStyle }}
            onMouseEnter={() => clearTimeout(returnToOriginTimeout())}
            onTouchMove={(event) => mouseMoveHandler(event)}
            onMouseMove={(event) => mouseMoveHandler(event)}
            onTouchEnd={() => returnToOriginTimeout()}
            onMouseOut={() => returnToOriginTimeout()}>

            <div
                className="HoverCard__container"
                style={containerStyle}>
                <div
                    className="HoverCard__image"
                    style={{ ...imageStyle, backgroundImage: `url(${props.image})` }} />
                {props.src && <a href={props.src} rel="noopener noreferrer" target="_blank" className="HoverCardLink"></a>}
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