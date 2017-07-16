import React, { Component } from 'react';
import router from './router';
import {connect} from 'react-redux';

class App extends Component {

  // componentDidMount() {
  //   getMonsters()
  //   .then(monsters => {
  //     this.setState({
  //       monsters: monsters
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: ''
  }
}

export default connect(mapStateToProps)(App);