import React from 'react';
import {Link} from 'react-router-dom';

export default function Class() {

  return (
    <div>

      <div className="sub-title-bar">
        <h1 className="sub-title-block"> Your Character! </h1>
      </div>

      <div className="main-bar">

        <div className="half-block hero-image"></div>

        <div className="half-block">

            <div className="info-bar-small">
              <div> Name </div>
              <input className="input-line"/>
            </div>

            <div className="info-bar-small">
              <div> Gender </div>
              <input className="input-line"/>
            </div>

            <div className="info-bar-small">
              <div> Race </div>
              <div> Insert Race </div>
            </div>

            <div className="info-bar-small">
              <div> Class </div>
              <div> Insert Class </div>
            </div>

            <div className="info-bar-small">
              <div> Cheats </div>
              <input className="input-line"/>
            </div>

            <div className="info-bar-large">
              <Link to="/">
                <button>
                  <h1 className="save-block"> Save </h1>
                </button>
              </Link>
            </div>

        </div>

      </div>

    </div>
  );
}