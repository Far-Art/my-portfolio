import LinkButton from "../../LinkButton/LinkButton";
import "./SocialMediaContainer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialMediaContainer(): JSX.Element {
    return (
        <div className="SocialMediaContainer">
            <LinkButton
                placeholder={"LinkedIn"}
                link={"https://www.linkedin.com/in/artur-farmanov/"}
                icon={LinkedInIcon} />

            <LinkButton
                placeholder={"GitHub"}
                link={"https://github.com/Far-Art"}
                icon={GitHubIcon} />
        </div>
    );
}