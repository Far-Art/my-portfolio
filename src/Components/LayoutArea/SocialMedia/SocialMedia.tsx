import "./SocialMedia.css";

function SocialMedia(): JSX.Element {
    return (
        <div className="SocialMedia">
			<a href="https://www.facebook.com/artur.farmanov" className="fab fa-facebook" target="_blank"></a>
            <a href="https://www.linkedin.com/in/artur-farmanov/" className="fab fa-linkedin-in" target="_blank"></a>
            <a href="https://github.com/Far-Art" className="fab fa-github" target="_blank"></a>
        </div>
    );
}

export default SocialMedia;
