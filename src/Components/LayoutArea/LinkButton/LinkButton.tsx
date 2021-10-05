import "./LinkButton.css";
import { SvgIconComponent } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

interface LinkButtonProps {
    placeholder: string;
    link: string;
    icon: SvgIconComponent
}

export default function LinkButton(props: LinkButtonProps): JSX.Element {
    return (
        <div className="LinkButton">
            <a
                rel="noopener noreferrer"
                href={props.link}
                target="_blank" >
                <SvgIcon component={props.icon} />
            </a>
            <span>{props.placeholder}</span>
        </div>
    );
}