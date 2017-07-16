import React from 'react';
import {Link} from 'react-router-dom';

export default function Class() {

  return (
    <div>

      <div className="sub-title-bar">
        <h1 className="sub-title-block"> Choose Your Class! </h1>
      </div>

      <div className="main-bar">

        <button className="main-block">
          <Link to="/character">
            <div className="image-block paladin-image"></div>
            <h1 className="button-block"> Paladin </h1>
          </Link>
        </button>

        <button className="main-block">
          <Link to="/character">
            <div className="image-block wizard-image"></div>
            <h1 className="button-block"> Wizard </h1>
          </Link>
        </button>

        <button className="main-block">
          <Link to="/character">
            <div className="image-block rogue-image"></div>
            <h1 className="button-block"> Rogue </h1>
          </Link>
        </button>

      </div>

    </div>
  );
}