import React, { useEffect, useState } from "react";
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

    const [mainContainer, setMainContainer] = useState<React.CSSProperties>({});

    const [textArray, setTextArray] = useState<string[]>([]);

    const [textStyle, setTextStyle] = useState<React.CSSProperties>({});

    const [gradientTextStyle, setGradientTextStyle] = useState<React.CSSProperties>({});

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
            setTextArray(props.text.split(" "));
        } else if (props.split && props.split === "dot") {
            setTextArray(props.text.split("."));
        } else {
            setTextArray([props.text]);
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
    }, [props.image, props.fontWeight, props.textTransform, props.textAlign]);

    /* GradientText Style  */
    useEffect(() => {
        const styleObj: React.CSSProperties = {};
        if (props.image) {
            if (props.image.includes("gradient")) {
                styleObj.backgroundImage = `${props.image}`;
            } else {
                styleObj.backgroundImage = `url(${props.image})`;
            }
        }
        if (props.imageFloat) {
            styleObj.backgroundPosition = props.imageFloat;
        }
        if (props.filter) {
            styleObj.filter = props.filter;
        }
        setGradientTextStyle(styleObj);
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
            <div aria-hidden={true} className="ClipTextShadowContainer" style={shadowContainerStyle}>
                {textArray.map((str, index) => <p key={index} style={{ ...textStyle, fontSize: fontSize }}>{<span aria-hidden={true}>{str}</span>}</p>)}
            </div>
            <div className="ClipTextContainer">
                {textArray.map((str, index) => <p key={index} style={{ ...textStyle, fontSize: fontSize }}>{<span className="GradientText" style={gradientTextStyle}>{str}</span>}</p>)}
            </div>
        </div>
    );
}