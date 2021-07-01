import "./ProjectsContainer.css";
import constructImg from '../../../Assets/Images/under-construct.jpg';

interface Values{
    name:string;
    image:string;
    link:string;
    disabled:boolean;
}

function ProjectsContainer(props:Values): JSX.Element {
    const image = (props.disabled ? constructImg : props.image);
    const classes = "ProjectsContainer" + (props.disabled ? " disabled" : "");
    const element = (
        props.disabled ? 
        <div className="text">
            <h2>{props.name}</h2>
            <p>under construction</p>
        </div>
        : 
        <div className="text">
            <h2>{props.name}</h2>
        </div>
        );
    return (
        <div className={classes} >
            <a href={props.link} target="_blank"></a>
            {element}
			<img src={image} />
        </div>
    );
}

export default ProjectsContainer;
