import React, { useEffect, useState } from "react";
import "./ClipText.css";

interface ClipTextProps {
    text: string;
    split?: "whitespace";
    image?: string;
    enableShadow?: boolean;
    textShadow?: string;
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
        setTextStyle(styleObj);
    }, [props.image]);

    /* Text Container Style  */
    useEffect(() => {
        const styleObj: React.CSSProperties = {};
        if (props.image) {
            styleObj.backgroundImage = `url(${props.image})`;
        }
        setTextContainerStyle(styleObj);
    }, [props.image]);

    /*  Shadow Container Style  */
    useEffect(() => {
        const styleObj: React.CSSProperties = {};
        if (props.enableShadow && props.textShadow) {
            styleObj.textShadow = `${props.textShadow}`;
        }
        setShadowContainerStyle(styleObj);
    }, [props.enableShadow ,props.textShadow]);

    return (
        <div className="ClipText" >
            <div className="ClipTextShadowContainer" style={shadowContainerStyle}>
                {text.map((str, index) => <h6 key={index} style={textStyle}>{str}</h6>)}
            </div>
            <div style={textContainerStyle} className="ClipTextContainer">
                {text.map((str, index) => <h2 key={index} style={textStyle}>{str}</h2>)}
            </div>
        </div>
    );
}