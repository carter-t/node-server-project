import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Battleground extends Component {
  render() {
  return (
    <div>

      <div className="sub-title-bar">
        <h1 className="sub-title-block"> The Battleground! </h1>
      </div>

      <div className="main-bar">

        <div className="main-block">

          <h1 className="button-block"> Hero </h1>
          <div className="pic-block hero-pic"></div>

          <div className="log-block">
            <div> {this.props.nameType} Link </div>
            <div> {this.props.genType} Male </div>
            <div> {this.props.raceType} Elf </div>
            <div> {this.props.classType} Paladin </div>
          </div>

        </div>

        <div className="main-block">

          <h1 className="button-block"> Stats </h1>
          <div className="stat-bar"> HP 100 </div>
          <div className="stat-bar"> Enemy 100 </div>
          <div className="stat-bar"> Roll 0/20 </div>


          <button className="stat-button">
            <div className="button-bar"> Attack </div>
          </button>

          <button className="stat-button">
            <div className="button-bar"> Heal </div>
          </button>

        </div>

        <div className="main-block">

          <h1 className="button-block"> Enemy </h1>
          <div className="pic-block enemy-pic"></div>
          
          <div className="log-block">
            <div> {this.props.nameType} Smog </div>
            <div> {this.props.genType} Male </div>
            <div> {this.props.raceType} Dragon </div>
            <div> {this.props.classType} Fire </div>
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

export default connect(mapStateToProps)(Battleground);