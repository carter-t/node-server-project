import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  updateHeroHP, 
  updateEnemyHP, 
  updateScore, 
  updateWin, 
  updateLose,
  updateClassType,
  updateNameType,
  updateRaceType,
  updateGenType
} from './../../dux/reducer';

class Battleground extends Component {
  render() {

    const raceGain = () => {
      switch(this.props.raceType) {
        case 'Human': return Math.floor(Math.random() * 151);
        case 'Elf': return Math.floor(Math.random() * 201);
        case 'Dwarf': return Math.floor(Math.random() * 101);
        default: return Math.floor(Math.random() * 101);
      }
    }

    const raceLoss = () => {
      switch(this.props.raceType) {
        case 'Human': return Math.floor(Math.random() * 151);
        case 'Elf': return Math.floor(Math.random() * 101);
        case 'Dwarf': return Math.floor(Math.random() * 201);
        default: return Math.floor(Math.random() * 101);
      }
    }

    const classAttack = () => {
      switch(this.props.classType) {
        case 'Paladin': return Math.floor(Math.random() * 151);
        case 'Wizard': return Math.floor(Math.random() * 101);
        case 'Rogue': return Math.floor(Math.random() * 201);
        case 'The Hero of Time': return 100000;
        default: return Math.floor(Math.random() * 101);
      }
    }

    const classHeal = () => {
      switch(this.props.classType) {
        case 'Paladin': return Math.floor(Math.random() * 151);
        case 'Wizard': return Math.floor(Math.random() * 201);
        case 'Rogue': return Math.floor(Math.random() * 101);
        default: return Math.floor(Math.random() * 101);
      }
    }

    if(this.props.heroHP === 'YOU DIED') {
      this.props.updateLose(true);
    } else if(this.props.enemyHP === 'DEAD') {
      this.props.updateWin(true);
    }

    let finishButton = null;
    if(this.props.win) {
      finishButton = 
        <Link to="/win">
          <button className="stat-button">
            <div className="button-bar next"> Next </div>
          </button>
        </Link>
    } else if(this.props.lose) {
      finishButton = 
        <Link to="/lose">
          <button className="stat-button">
            <div className="button-bar next"> Next </div>
          </button>
        </Link>
    }

    return (
      <div>
        <div className="sub-title-bar">
          <h1 className="sub-title-block"> The Dragon's Lair! </h1>
        </div>

        <div className="main-bar">
          <div className="main-block">
            <h1 className="button-block"> Hero </h1>
            <div className="pic-block hero-pic"></div>

            <div className="log-block">
              <div> {this.props.nameType} </div>
              <div> {this.props.genType} </div>
              <div> {this.props.raceType} </div>
              <div> {this.props.classType} </div>
            </div>
          </div>

          <div className="main-block">
            <h1 className="button-block"> Stats </h1>
            <div className="stat-bar"> HP {this.props.heroHP} </div>
            <div className="stat-bar"> Enemy {this.props.enemyHP} </div>
            <div className="stat-bar"> Score {this.props.score} </div>

            <button className="stat-button" onClick={ () => {
              let enemyHP = this.props.enemyHP;
              let heroHP = this.props.heroHP;
              let damage = classAttack();
              let score = this.props.score;

              if(enemyHP > damage && heroHP !== 'YOU DIED') {
                this.props.updateEnemyHP(enemyHP - damage);
                this.props.updateScore(score + damage);
              } else if(enemyHP <= damage) {
                this.props.updateEnemyHP('DEAD');
              }

              setTimeout( () => {
                let bossAttack = raceGain();
                if(heroHP > bossAttack && enemyHP !== 'DEAD') {
                  this.props.updateHeroHP(heroHP - bossAttack);
                } else if(heroHP <= bossAttack) {
                  this.props.updateHeroHP('YOU DIED');
                }
              }, 1000)
              }}>
              <div className="button-bar"> Attack </div>
            </button>

            <button className="stat-button" onClick={ () => {
              let heroHP = this.props.heroHP;
              let score = this.props.score;
              let heal = classHeal();
              let scoreAttack = raceLoss();

              if(heroHP < 500) {
                this.props.updateHeroHP(heroHP + heal);
                this.props.updateScore(score - scoreAttack);
              } else if(heroHP > 500) {
                this.props.updateHeroHP(heroHP -= (heroHP - 500));
                this.props.updateScore(score - scoreAttack);
              } else if(heroHP <= 0) {
                this.props.updateHeroHP('YOU DIED');
              }
              }}>
              <div className="button-bar"> Heal </div>
            </button>

          </div>

          <div className="main-block">
            <h1 className="button-block"> Enemy </h1>
            <div className="pic-block enemy-pic"></div>
            <div className="log-block2"> The Dragon of Chaos </div>

          {finishButton}

          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroHP: state.heroHP,
    enemyHP: state.enemyHP,
    score: state.score,
    win: state.win,
    lose: state.lose,
    cheatCode: state.cheatCode,

    nameType: state.nameType,
    genType: state.genType,
    raceType: state.raceType,
    classType: state.classType
  }
}

export default connect(mapStateToProps, {
  updateHeroHP, 
  updateEnemyHP,
  updateScore, 
  updateWin, 
  updateLose, 
  updateClassType,
  updateNameType,
  updateRaceType,
  updateGenType
})(Battleground);