import React, { Component } from 'react';
import {connect} from 'react-redux';
import router from './router';

// import dungeonReducer from './ducks/dungeonReducer';
import {postRaces} from './ducks/dungeonReducer';
import {getRaces} from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      races: []
    }
  }

  componentDidMount() {
    getRaces()
    .then(races => {
      this.setState({
        races: races
      })
    })
  }

  // handleClick(event) {

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
  console.log("the state:", state);
  return {
    races: state.dungeon.races
  }
}

export default connect(mapStateToProps, {postRaces})(App);