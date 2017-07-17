import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateRaceType} from './../../dux/reducer';

class Race extends Component {
  render() {
    return (
      <div>

        <div className="sub-title-bar">
          <h1 className="sub-title-block"> Choose Your Race! </h1>
        </div>

        <div className="main-bar">

          <button className="main-block" onClick={ () => {this.props.updateRaceType('Human')} }>
            <Link to="/class">
              <div className="wrap">
                <div className="image-block human-image"></div>
                <h1 className="button-block"> Human </h1>
              </div>
            </Link>
          </button>

          <button className="main-block" onClick={ () => {this.props.updateRaceType('Elf')} }>
            <Link to="/class">
              <div className="wrap">
                <div className="image-block elf-image"></div>
                <h1 className="button-block"> Elf </h1>
              </div>
            </Link>
          </button>

          <button className="main-block" onClick={ () => {this.props.updateRaceType('Dwarf')} }>
            <Link to="/class">
              <div className="wrap">
                <div className="image-block dwarf-image"></div>
                <h1 className="button-block"> Dwarf </h1>
              </div>
            </Link>
          </button>

        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    raceType: state.raceType
  }
}

export default connect(mapStateToProps, {updateRaceType})(Race);