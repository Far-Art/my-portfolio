import "./ProjectContainer.css";
import constructImg from "../../../Assets/Images/under-construct.jpg";

interface ProjectContainerProps {
    name: string;
    image: string;
    link: string;
    disabled?: boolean;
    stack?: string[];
}

export default function ProjectContainer(props: ProjectContainerProps): JSX.Element {
    const image = (props.disabled ? constructImg : props.image);
    const classes = "ProjectContainer" + (props.disabled ? " disabled" : "");

    const element = (
        props.disabled ?
            <div className="text">
                <h2>{props.name}</h2>
                <p>under construction</p>
            </div>
            :
            <div className="text">
                <h2>{props.name}</h2>
                {/* {props.stack && } */}
            </div>
    );

    return (
        <div className={classes} >
            <a href={props.link} rel="noopener noreferrer" target="_blank"></a>
            {element}
            <img src={image} alt={props.name} />
        </div>
    );
}