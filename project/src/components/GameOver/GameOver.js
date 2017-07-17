import React from 'react';
import {Link} from 'react-router-dom';

export default function GameOver() {
  return (
    <div>
        
      <div className="title-bar">
        <h1 className="title-block"> GAME OVER!!! </h1>
      </div>

      <h1 className="end-message"> You Lose. Not only in this game but in life itself. </h1>

      <div className="start-bar">
        <Link to="/">
          <button onClick={ () => {
              window.location.reload()
            }}>
            <h1 className="start-block"> Try Again </h1>
          </button>
        </Link>
      </div>

    </div>
  );
}