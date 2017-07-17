import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateClassType} from './../../dux/reducer';

class Class extends Component {
  render() {
    return (
      <div>

        <div className="sub-title-bar">
          <h1 className="sub-title-block"> Choose Your Class! </h1>
        </div>

        <div className="main-bar">

          <button className="main-block" onClick={ () => {this.props.updateClassType('Paladin')} }>
            <Link to="/character">
              <div className="wrap">
                <div className="image-block paladin-image"></div>
                <h1 className="button-block"> Paladin </h1>
              </div>
            </Link>
          </button>

          <button className="main-block" onClick={ () => {this.props.updateClassType('Wizard')} }>
            <Link to="/character">
              <div className="wrap">
                <div className="image-block wizard-image"></div>
                <h1 className="button-block"> Wizard </h1>
              </div>
            </Link>
          </button>

          <button className="main-block" onClick={ () => {this.props.updateClassType('Rogue')} }>
            <Link to="/character">
              <div className="wrap">
                <div className="image-block rogue-image"></div>
                <h1 className="button-block"> Rogue </h1>
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
    classType: state.classType
  }
}

export default connect(mapStateToProps, {updateClassType})(Class);