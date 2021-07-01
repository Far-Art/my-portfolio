import "./Skills.css";

function Skills(): JSX.Element {
    return (
        <div className="Skills">
			<h2>My Skills</h2>
            <p>I specialize in:</p>
            <div className="twoDimensional">
                <ul>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>MySQL</li>
                    <li>JDBC</li>
                </ul>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>CSS/HTML</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Skills;
