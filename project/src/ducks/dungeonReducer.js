import {getRaces} from './../api';

const initialState = {
  races: [],
  classes: [],
  equipment: [],
}

const POST_RACES = 'POST_RACES';
// const POST_CLASSES = 'POST_CLASSES';

export function postRaces() {
  return {
    type: POST_RACES,
    payload: getRaces
  }
}

export default function dungeonReducer(state=initialState, action) {
  switch(action.type) {

    case POST_RACES:
      return Object.assign({}, state, {races: action.payload});

    default:
      return state;
  }
}