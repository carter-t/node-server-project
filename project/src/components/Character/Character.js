import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Character extends Component {
  render() {
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
              <div> {this.props.raceType} </div>
            </div>

            <div className="info-bar-small">
              <div> Class </div>
              <div> {this.props.classType} </div>
            </div>

            <div className="info-bar-small">
              <div> Cheats </div>
              <input className="input-line"/>
            </div>

            <div className="info-bar-large">
              <Link to="/battleground">
                <button>
                  <h1 className="next-block"> Next </h1>
                </button>
              </Link>
            </div>

        </div>

      </div>

    </div>
  );
  }
}

function mapStateToProps(state) {
  return {
    nameType: '',
    genType: ''
  }
}

export default connect(mapStateToProps)(Character);