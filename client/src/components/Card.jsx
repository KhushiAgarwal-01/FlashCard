
import '../styling/card.css';  
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card() {
    const [flip, setFlip] = useState(false);
    return (
        <div className="card-container">
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                <div className="card front">
                    Welcome to GFG.
                    <br />
                    <br />
                    <button className="flip-button" onClick={() => setFlip(!flip)}>
                        Flip
                    </button>
                </div>
                <div className="card back">
                    Computer Science Portal.
                    <br />
                    <button className="flip-button" onClick={() => setFlip(!flip)}>
                        Flip
                    </button>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default Card;

