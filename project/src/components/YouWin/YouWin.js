import React from 'react';
import {Link} from 'react-router-dom';

export default function YouWin() {
  return (
    <div>
        
      <div className="title-bar">
        <h1 className="title-block"> YOU WIN!!! </h1>
      </div>

      <div className="end-message">
        <h1> Congratulations! You brought relative order to the World of React! </h1>
      </div>

      <div className="start-bar">
        <Link to="/">
          <button onClick={ () => {
              window.location.reload()
            }}>
            <h1 className="start-block"> Play Again </h1>
          </button>
        </Link>
      </div>

    </div>
  );
}