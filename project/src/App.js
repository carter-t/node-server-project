import React, { Component } from 'react';
import {connect} from 'react-redux';
import router from './router';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: ''
    }
  }

  handleClick(event) {

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
  console.log('store', state)
  return {
    state: ''
  }
}

export default connect(mapStateToProps)(App);