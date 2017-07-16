import {getMonsters} from './api';

const initialState = {
  nameType: '',
  genType: '',
  raceType: '',
  classType: '',
  
  monsterList: [],
}

const NAME_TYPE = 'NAME_TYPE';
const GEN_TYPE = 'GEN_TYPE';
const RACE_TYPE = 'RACE_TYPE';
const CLASS_TYPE = 'CLASS_TYPE';
const POST_MONSTERS = 'POST_MONSTERS';

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case NAME_TYPE:
      return Object.assign({}, state, {nameType: action.payload});

    case GEN_TYPE:
      return Object.assign({}, state, {genType: action.payload});

    case RACE_TYPE:
      return Object.assign({}, state, {raceType: action.payload});

    case CLASS_TYPE:
      return Object.assign({}, state, {classType: action.payload});

    case POST_MONSTERS:
      return Object.assign({}, state, {monsterList: action.payload});

    default:
      return state;
  }
}

export function updateNameType(string) {
  return {
    type: NAME_TYPE,
    payload: string
  }
}

export function updateGenType(string) {
  return {
    type: GEN_TYPE,
    payload: string
  }
}

export function updateRaceType(string) {
  return {
    type: RACE_TYPE,
    payload: string
  }
}

export function updateClassType(string) {
  return {
    type: CLASS_TYPE,
    payload: string
  }
}

export function postMonsters() {
  return {
    type: POST_MONSTERS,
    payload: getMonsters
  }
}