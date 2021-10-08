import React, { useEffect, useState } from "react";
import "./ClipText.css";

interface ClipTextProps {
    text: string;
    split?: "whitespace";
    fontSize?: string;
    image?: string;
    imageFloat?: "left" | "center" | "right" | "top" | "bottom";
    enableShadow?: boolean;
    textShadow?: string;
    filter?: string;
}

export default function ClipText(props: ClipTextProps): JSX.Element {

    const [text, setText] = useState<string[]>([]);

    const [textStyle, setTextStyle] = useState<React.CSSProperties>({});

    const [textContainerStyle, setTextContainerStyle] = useState<React.CSSProperties>({});

    const [shadowContainerStyle, setShadowContainerStyle] = useState<React.CSSProperties>({});

    /*  Text Split  */
    useEffect(() => {
        if (props.split && props.split === "whitespace") {
            setText(props.text.split(" "));
        } else {
            setText([props.text]);
        }
    }, [props.text, props.split]);

    /*  Text Style  */
    useEffect(() => {
        const styleObj: React.CSSProperties = {};
        if (props.image) {
            styleObj.color = "transparent";
        }
        if (props.fontSize) {
            styleObj.fontSize = `calc(var(--font-size) + ${props.fontSize})`;
        }
        setTextStyle(styleObj);
    }, [props.image, props.fontSize]);

    /* Text Container Style  */
    useEffect(() => {
        const styleObj: React.CSSProperties = {};
        if (props.image) {
            styleObj.backgroundImage = `url(${props.image})`;
        }
        if (props.imageFloat) {
            styleObj.backgroundPosition = props.imageFloat;
        }
        if (props.filter) {
            styleObj.filter = props.filter;
        }
        setTextContainerStyle(styleObj);
    }, [props.image, props.filter]);

    /*  Shadow Container Style  */
    useEffect(() => {
        const styleObj: React.CSSProperties = {};
        if (props.enableShadow && props.textShadow) {
            styleObj.textShadow = `${props.textShadow}`;
        }
        if (props.filter) {
            styleObj.filter = props.filter;
        }
        setShadowContainerStyle(styleObj);
    }, [props.enableShadow, props.textShadow, props.filter]);

    return (
        <div className="ClipText" >
            <div className="ClipTextShadowContainer" style={shadowContainerStyle}>
                {text.map((str, index) => <h1 key={index} style={textStyle}>{str}</h1>)}
            </div>
            <div style={textContainerStyle} className="ClipTextContainer">
                {text.map((str, index) => <h1 key={index} style={textStyle}>{str}</h1>)}
            </div>
        </div>
    );
}