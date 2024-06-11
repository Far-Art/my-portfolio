import './Main.css';
import artBurgerImg from '../../../Assets/Thumbnails/art-burger-thumbnail.jpg';
import neonClockImg from '../../../Assets/Thumbnails/neon-clock-thumbnail.jpg';
import couponAsArtImg from '../../../Assets/Thumbnails/coupon-as-art-thumbnail.jpg';
import couponAsArtNgImg from '../../../Assets/Thumbnails/coupon-as-art-ng-thumbnail.jpg';
import Skills from '../Skills/Skills';
import ClipText from '../../ClipText/ClipText';
import HoverCard from '../../HoverCard/HoverCard';
import {ReactElement} from 'react';


export default function Main(): ReactElement {

  const shadowStyle = `0 2px 1px rgba(0,0,0,0.07), 
    0 4px 2px rgba(0,0,0,0.07), 
    0 8px 4px rgba(0,0,0,0.07), 
    0 16px 8px rgba(0,0,0,0.07),
    0 32px 16px rgba(0,0,0,0.07)`;
  return (
      <div className="Main">
        <div className="Fixed__container">
          <div className="ArturPhoto"/>
          <ClipText
              text="Hello random visitor, I'm Artur Farmanov, a junior Full-Stack Developer, I welcome you in my portfolio website. I encourage you to browse my projects and leave a comment ;)"
              fontSize="2.2vw"
              minFontSize="0.8rem"
              maxFontSize="1.05rem"
              maxWidth="800px"
              textTransform="unset"
              image="var(--linear-gradient-middle)"
              textShadow={shadowStyle}
              margin="20px 0 clamp(10px, 5vw, 70px) 0"
          />
        </div>

        <div className="ContentContainer">
          <ClipText
              text="Pet projects"
              image="var(--linear-gradient)"
              textShadow={shadowStyle}
          />

          <p>{'*Projects may take up to 5 minutes to load, please be patient'}</p>
          <br></br>
          <p>{'*Cards hover effect can be interacted with swipe'}</p>

          <div className="ProjectsContainer">
            <HoverCard
                marginBottom="5vh"
                image={couponAsArtImg}
                title="Coupon As Art"
                src="https://couponasart.herokuapp.com"
                apiStack={['React', 'TypeScript', 'Redux', 'Axios', 'Java 11+', 'Spring Boot', 'Hibernate', 'MySQL', 'REST', 'Single page app']}
            />

            <HoverCard
                marginBottom="5vh"
                image={couponAsArtNgImg}
                title="Coupon As Art"
                src="https://couponsasartng.web.app/"
                apiStack={['Angular 9+', 'TypeScript', 'Bootstrap 5', 'Lazy loaded modules', 'Firebase API', 'Responsive', 'REST', 'Single page app']}
            />

            <HoverCard
                marginBottom="2vh"
                image={artBurgerImg}
                title="Art Burger"
                src="https://art-burger.netlify.app/"
                apiStack={['React', 'TypeScript', 'Redux', 'Responsive']}
            />

            <HoverCard
                marginBottom="2vh"
                image={neonClockImg}
                title="Art Neon Clock"
                src="https://neon-analog-clock.netlify.app/"
                apiStack={['Vanilla HTML', 'Vanilla JavaScript', 'Responsive']}
            />
          </div>

          <ClipText
              text="I have skills in..."
              image="var(--linear-gradient)"
              fontSize="5vw"
              minFontSize="0.9rem"
              maxFontSize="1.6rem"
              margin="20px auto 0"
              textShadow={shadowStyle}
          />

          <Skills/>
        </div>
      </div>
  );
}