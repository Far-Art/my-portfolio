import './Skills.css';
import {ReactElement} from 'react';


export default function Skills(): ReactElement {
  return (
      <div className="Skills">
        <div className="twoDimensional">
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>React</li>
            <li>Angular 9+</li>
            <li>Hibernate</li>
            <li>JDBC</li>
            <li>MySQL</li>
            <li>Object Oriented Programming</li>
            <li>REST APIs</li>
          </ul>

          <ul>
            <li>Single Page Applications</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Redux</li>
            <li>Axios</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Responsive Layout</li>
            <li>Functional Programming</li>

          </ul>
        </div>
      </div>
  );
}