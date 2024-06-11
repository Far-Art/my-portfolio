import "./MaskedCard.css";
import {ReactElement} from 'react';

export default function MaskedCard(): ReactElement {
    return (
        <div className="MaskedCard">
            <div className="MaskedCard__Mask">
                <div className="MaskedCard__Image"></div>
            </div>
        </div>
    );
}