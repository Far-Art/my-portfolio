import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimension";
import "./ClipText.css";

interface ClipTextProps {
    text: string;
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "unset" | "none";
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "initial" | "inherit";
    split?: "whitespace" | "dot";
    fontSize?: string;
    minFontSize?: string;
    maxFontSize?: string;
    fontWeight?: number;
    image?: string;
    imageFloat?: "left" | "center" | "right" | "top" | "bottom";
    textShadow?: string;
    filter?: string;
    maxWidth?: string;
    margin?: string;
}

export default function ClipText(props: ClipTextProps): JSX.Element {

    const { windowWidth, } = useWindowDimensions();

    const [mainContainer, setMainContainer] = useState<React.CSSProperties>({});

    const [text, setText] = useState<string[]>([]);

    const [textStyle, setTextStyle] = useState<React.CSSProperties>({});

    const [textContainerStyle, setTextContainerStyle] = useState<React.CSSProperties>({});

    const [shadowContainerStyle, setShadowContainerStyle] = useState<React.CSSProperties>({});

    const [fontSize, setFontSize] = useState<string>();

    /*  Main Container  */
    useEffect(() => {
        const styleObj: React.CSSProperties = {};
        if (props.maxWidth) {
            styleObj.maxWidth = props.maxWidth;
        }
        if (props.margin) {
            styleObj.margin = props.margin;
        }
        setMainContainer(styleObj);
    }, [props.maxWidth, props.margin]);

    /* Font size */
    useEffect(() => {
        let fontSize = "2rem";
        let minFontSize = "0vw";
        let maxFontSize = "100vw";
        if (props.fontSize) {
            fontSize = props.fontSize;
        }
        if (props.minFontSize) {
            minFontSize = props.minFontSize;
        }
        if (props.maxFontSize) {
            maxFontSize = props.maxFontSize;
        }
        setFontSize(`clamp(${minFontSize}, ${fontSize}, ${maxFontSize})`);
    }, [props.fontSize, props.minFontSize, props.maxFontSize]);

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
        if (props.fontWeight) {
            styleObj.fontWeight = props.fontWeight;
        }
        if (props.textTransform) {
            styleObj.textTransform = props.textTransform;
        }
        if (props.textAlign) {
            styleObj.textAlign = props.textAlign;
        }
        setTextStyle(styleObj);
    }, [props.image, windowWidth, props.fontWeight, props.textTransform, props.textAlign]);

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
        if (props.textShadow) {
            styleObj.textShadow = `${props.textShadow}`;
        }
        if (props.filter) {
            styleObj.filter = props.filter;
        }
        setShadowContainerStyle(styleObj);
    }, [props.textShadow, props.filter]);

    return (
        <div className="ClipText" style={mainContainer} >
            <div className="ClipTextShadowContainer" style={shadowContainerStyle}>
                {text.map((str, index) => <h1 key={index} style={{ ...textStyle, fontSize: fontSize }}>{str}</h1>)}
            </div>
            <div style={textContainerStyle} className="ClipTextContainer">
                {text.map((str, index) => <h1 key={index} style={{ ...textStyle, fontSize: fontSize }}>{str}</h1>)}
            </div>
        </div>
    );
}