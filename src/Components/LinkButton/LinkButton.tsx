import "./LinkButton.css";
import { SvgIconComponent } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import {ReactElement} from 'react';

interface LinkButtonProps {
    placeholder: string;
    link: string;
    icon: SvgIconComponent
}

export default function LinkButton(props: LinkButtonProps): ReactElement {
    return (
        <div className="LinkButton">
            <div className="LinkButton__link_background" />
            <SvgIcon component={props.icon} />
            <a
                rel="noopener noreferrer"
                href={props.link}
                target="_blank" >
                {props.placeholder}
            </a>
            <span aria-hidden="true">{props.placeholder}</span>
        </div>
    );
}