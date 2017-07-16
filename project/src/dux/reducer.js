import {getMonsters} from './api';

const initialState = {
  monsters: [],
}

const POST_MONSTERS = 'POST_MONSTERS';

export function postMonsters() {
  return {
    type: POST_MONSTERS,
    payload: getMonsters
  }
}

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case POST_MONSTERS:
      return Object.assign({}, state, {monsters: action.payload});

    default:
      return state;
  }
}