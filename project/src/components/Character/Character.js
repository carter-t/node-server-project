import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMonsterName, getMonsterHealth, getMonsterAttack} from './../../dux/api';
import {
  updateNameType, 
  updateGenType, 
  updateClassType,
  updateRaceType, 
  updateCheatCode, 
  updateScore,
  updateEnemyHP,
  updateMonsterName,
  updateMonsterHealth,
  updateMonsterAttack
} from './../../dux/reducer';

class Character extends Component {
  render() {

    const random = Math.floor(Math.random() * 325)

    if(this.props.cheatCode === 'masterSword') {
      this.props.updateNameType('Link');
      this.props.updateGenType('');
      this.props.updateClassType('The Hero of Time');
      this.props.updateRaceType('');
    } 
    else if(this.props.cheatCode === 'darkSouls') {
      this.props.updateEnemyHP(999999);
    }
    else if(this.props.cheatCode === 'allDaPoints') {
      this.props.updateScore(1000000000);
    }
    else if(this.props.cheatCode === 'insertQuarter') {
      alert('You\'ve spent your last quarter. You are poor and nobody loves you.');
    }

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
                <input className="input-line" placeholder="Name" type="text" 
                  onChange={ (e) => this.props.updateNameType(e.target.value) } />
              </div>

              <div className="info-bar-small">
                <div> Age </div>
                <input className="input-line" placeholder="Age" type="text" 
                  onChange={ (e) => this.props.updateGenType(e.target.value) } />
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
                <input className="input-line" placeholder="...inspect?" type="text" 
                  onChange={ (e) => this.props.updateCheatCode(e.target.value) } />
              </div>

              <div className="info-bar-large">
                <Link to="/battleground">
                  <button onClick={ () => {
                    getMonsterName(random).then(res => {
                      this.props.updateMonsterName(res)
                    });
                    getMonsterHealth(random).then(res => {
                      this.props.updateMonsterHealth(res)
                    });
                    getMonsterAttack(random).then(res => {
                      this.props.updateMonsterAttack(res)
                    });
                  }}>
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
    nameType: state.nameType,
    genType: state.genType,
    raceType: state.raceType,
    classType: state.classType,
    cheatCode: state.cheatCode,
    score: state.score,
    monster: state.monster
  }
}

export default connect(mapStateToProps, {
  updateNameType,
  updateGenType, 
  updateClassType,
  updateRaceType, 
  updateCheatCode, 
  updateScore,
  updateEnemyHP,
  updateMonsterName,
  updateMonsterHealth,
  updateMonsterAttack
})(Character);