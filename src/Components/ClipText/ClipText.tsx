import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimension";
import "./ClipText.css";

interface ClipTextProps {
    text: string;
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "unset" | "none";
    split?: "whitespace" | "dot";
    fontSize?: string;
    fontWeight?: number;
    image?: string;
    imageFloat?: "left" | "center" | "right" | "top" | "bottom";
    enableShadow?: boolean;
    textShadow?: string;
    filter?: string;
    maxWidth?: string;
}

export default function ClipText(props: ClipTextProps): JSX.Element {

    const { windowWidth, } = useWindowDimensions();

    const [mainContainer, setMainContainer] = useState<React.CSSProperties>({});

    const [text, setText] = useState<string[]>([]);

    const [textStyle, setTextStyle] = useState<React.CSSProperties>({});

    const [textContainerStyle, setTextContainerStyle] = useState<React.CSSProperties>({});

    const [shadowContainerStyle, setShadowContainerStyle] = useState<React.CSSProperties>({});

    /*  Main Container  */
    useEffect(() => {
        const styleObj: React.CSSProperties = {};
        if (props.maxWidth) {
            styleObj.maxWidth = props.maxWidth;
        }
        setMainContainer(styleObj);
    }, [props.maxWidth]);

    /*  Text Split  */
    useEffect(() => {
        if (props.split && props.split === "whitespace") {
            setText(props.text.split(" "));
        } else if (props.split && props.split === "dot") {
            setText(props.text.split("."));
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
            if (windowWidth < 600) {
                styleObj.fontSize = `calc(${props.fontSize} / 1.2)`;
            } else {
                styleObj.fontSize = props.fontSize;
            }
        }
        if (props.fontWeight) {
            styleObj.fontWeight = props.fontWeight;
        }
        if (props.textTransform) {
            styleObj.textTransform = props.textTransform;
        }
        setTextStyle(styleObj);
    }, [props.image, props.fontSize, windowWidth, props.fontWeight, props.textTransform]);

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
    }, [props.image, props.filter, props.imageFloat]);

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
        <div className="ClipText" style={mainContainer} >
            <div className="ClipTextShadowContainer" style={shadowContainerStyle}>
                {text.map((str, index) => <h1 key={index} style={textStyle}>{str}</h1>)}
            </div>
            <div style={textContainerStyle} className="ClipTextContainer">
                {text.map((str, index) => <h1 key={index} style={textStyle}>{str}</h1>)}
            </div>
        </div>
    );
}