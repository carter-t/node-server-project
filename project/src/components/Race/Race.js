import React from 'react';
import {Link} from 'react-router-dom';

export default function Race() {

  return (
    <div>

      <div className="sub-title-bar">
        <h1 className="sub-title-block"> Choose Your Race! </h1>
      </div>

      <div className="main-bar">

        <button className="main-block">
          <Link to="/class">
            <div className="image-block human-image"></div>
            <h1 className="button-block"> Human </h1>
          </Link>
        </button>

        <button className="main-block">
          <Link to="/class">
            <div className="image-block elf-image"></div>
            <h1 className="button-block"> Elf </h1>
          </Link>
        </button>

        <button className="main-block">
          <Link to="/class">
            <div className="image-block dwarf-image"></div>
            <h1 className="button-block"> Dwarf </h1>
          </Link>
        </button>

      </div>

    </div>
  );
}