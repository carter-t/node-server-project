import React from 'react';
import {Link} from 'react-router-dom';

export default function Landing() {

  return (
    <div>
        
      <div className="title-bar">
        <h1 className="title-block"> REACT QUEST! </h1>
      </div>

      <div className="start-bar">
        <Link to="/race">
          <button>
            <h1 className="start-block"> Start </h1>
          </button>
        </Link>
      </div>

    </div>
  );
}