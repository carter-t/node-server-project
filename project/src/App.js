import React, { Component } from 'react';
import router from './router';
import {connect} from 'react-redux';

import {postMonsters} from './dux/reducer';

class App extends Component {

  // componentDidMount() {
  //   getMonsters()
  //   .then(monsters => {
  //     this.setState({
  //       monsters: monsters
  //     })
  //   })
  // }

  handleClick(event) {
    this.props.postMonsters(this.state.monsters)
  }

  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state:', state)
  return {
    monsters: state.monsters
  }
}

export default connect(mapStateToProps, {postMonsters})(App);