export const initialState = {
  nameType: '',
  genType: '',
  raceType: '',
  classType: '',
  heroHP: 500,
  score: 0,
  win: false,
  lose: false,
  cheatCode: '',
  monster: '',
  monsterHP: 0,
  monsterAT: 0
}

const NAME_TYPE = 'NAME_TYPE';
const GEN_TYPE = 'GEN_TYPE';
const RACE_TYPE = 'RACE_TYPE';
const CLASS_TYPE = 'CLASS_TYPE';
const HERO_HP = 'HERO_HP';
const ENEMY_HP = 'ENEMY_HP';
const SCORE = 'SCORE';
const WIN = 'WIN';
const LOSE = 'LOSE';
const CHEAT_CODE = 'CHEAT_CODE';
const MONSTER_NAME = 'MONSTER_NAME';
const MONSTER_HEALTH = 'MONSTER_HEALTH';
const MONSTER_ATTACK = 'MONSTER_ATTACK';

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

    case HERO_HP:
      return Object.assign({}, state, {heroHP: action.payload});

    case ENEMY_HP:
      return Object.assign({}, state, {enemyHP: action.payload});

    case SCORE:
      return Object.assign({}, state, {score: action.payload});

    case WIN:
      return Object.assign({}, state, {win: action.payload});

    case LOSE:
      return Object.assign({}, state, {lose: action.payload});

    case CHEAT_CODE:
      return Object.assign({}, state, {cheatCode: action.payload});

    case MONSTER_NAME:
      return Object.assign({}, state, {monster: action.payload});

    case MONSTER_HEALTH:
      return Object.assign({}, state, {monsterHP: action.payload});

    case MONSTER_ATTACK:
      return Object.assign({}, state, {monsterAT: action.payload});

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

export function updateHeroHP(num) {
  return {
    type: HERO_HP,
    payload: num
  }
}

export function updateEnemyHP(num) {
  return {
    type: ENEMY_HP,
    payload: num
  }
}

export function updateScore(num) {
  return {
    type: SCORE,
    payload: num
  }
}

export function updateWin(boolean) {
  return {
    type: WIN,
    payload: boolean
  }
}

export function updateLose(boolean) {
  return {
    type: LOSE,
    payload: boolean
  }
}

export function updateCheatCode(code) {
  return {
    type: CHEAT_CODE,
    payload: code,
  }
}

export function updateMonsterName(data) {
  return {
    type: MONSTER_NAME,
    payload: data
  }
}

export function updateMonsterHealth(data) {
  return {
    type: MONSTER_HEALTH,
    payload: data
  }
}

export function updateMonsterAttack(data) {
  return {
    type: MONSTER_ATTACK,
    payload: data
  }
}