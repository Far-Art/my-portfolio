import {CSSProperties, ReactElement, useEffect, useState} from 'react';
import './HoverCard.css';


interface HoverCardProps {
  image: string;
  title?: string;
  apiStack?: string[];
  src?: string;
  marginBottom?: string;
  description?: string;
}

export default function HoverCard(props: HoverCardProps): ReactElement {

  const [fieldStyle, setFieldStyle] = useState<CSSProperties>({});

  const [containerStyle, setContainerStyle] = useState<CSSProperties>({});

  const [imageStyle, setImageStyle] = useState<CSSProperties>({});

  const [titleStyle, setTitleStyle] = useState<CSSProperties>({});

  const imageTranslate3d = 'translate3d(0, 0, -200px)';

  const titleTranslate3d = 'translate3d(0, 0, 60px)';

  const transitionOnLeave = 'all 1s cubic-bezier(.42,.01,.56,1.02)';

  const returnToOrigin: CSSProperties = {transform: `rotateX(${0}deg) rotateY(${0}deg)`, transition: transitionOnLeave};

  const maxYDeg               = 7; // determines maximum rotation degree for Y
  const maxXDeg               = 7; // determines maximum rotation degree for X
  const rotationSensitivity   = 0.05; // determines how fast rotation will occur
  const toOriginTimeoutMillis = 1300; // milliseconds before card return to original position

  useEffect(() => {
    if (props.marginBottom) {
      setFieldStyle({marginBottom: props.marginBottom});
    }
  }, [props.marginBottom]);

  const mouseMoveHandler = (event: any) => {
    // get target coordinates
    const rect = event.target.getBoundingClientRect();

    // try to get touch coordinates, else get mouse coordinates
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    // calc offsets
    const offsetX = Math.round((rect.top + rect.height / 2) - clientY);
    const offsetY = Math.round(-((rect.left + rect.width / 2) - clientX));

    // set rotation degree
    let rotationDegY = offsetY > 0 ? Math.min(offsetY * rotationSensitivity, maxYDeg) : Math.max(offsetY * rotationSensitivity, maxYDeg * -1);
    let rotationDegX = offsetX > 0 ? Math.min(offsetX * rotationSensitivity, maxXDeg) : Math.max(offsetX * rotationSensitivity, maxXDeg * -1);

    //set styles
    setContainerStyle({transform: `rotateX(${rotationDegX}deg) rotateY(${rotationDegY}deg)`});
    setTitleStyle({transform: `rotateX(${rotationDegX}deg) rotateY(${rotationDegY}deg) ${titleTranslate3d}`});
    setImageStyle({transform: `rotateX(${rotationDegX}deg) rotateY(${rotationDegY}deg) ${imageTranslate3d}`});
  }

  let returnToOriginTimeout = () => setTimeout(() => {
    setContainerStyle(returnToOrigin);
    setImageStyle({
      transform: returnToOrigin.transform + ` ${imageTranslate3d}`,
      WebkitTransform: returnToOrigin.transform + ` ${imageTranslate3d}`,
      transition: transitionOnLeave,
      WebkitTransition: transitionOnLeave
    });
    setTitleStyle({
      transform: returnToOrigin.transform + ` ${titleTranslate3d}`,
      WebkitTransform: returnToOrigin.transform + ` ${titleTranslate3d}`,
      transition: transitionOnLeave,
      WebkitTransition: transitionOnLeave
    });
  }, toOriginTimeoutMillis);

  return (
      <div
          className="HoverCardField"
          style={{...fieldStyle}}
          onMouseEnter={() => clearTimeout(returnToOriginTimeout())}
          onTouchMove={(event) => mouseMoveHandler(event)}
          onMouseMove={(event) => mouseMoveHandler(event)}
          onTouchEnd={() => returnToOriginTimeout()}
          onMouseOut={() => returnToOriginTimeout()}>

        <div
            className="HoverCard__container"
            style={containerStyle}>
          <div
              className="HoverCard__image"
              style={{...imageStyle, backgroundImage: `url(${props.image})`}}/>
          {
              props.src &&
              <a href={props.src} rel="noopener noreferrer" target="_blank" className="HoverCardLink">{props.title}</a>}
          {props.description && <p className="HoverCard__description">{props.description}</p>
          }
        </div>

        <div
            className="HoverCard__title"
            style={titleStyle}>
          <span aria-hidden="true">{props.title}</span>
          <div
              className="HoverCard__apistack"
          >{props.apiStack && props.apiStack.map((stack, index) => <p aria-hidden="true" key={index}>{stack}</p>)}</div>
        </div>
      </div>
  );
}