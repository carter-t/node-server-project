import axios from 'axios';

export const getMonsterName = (num) => {
  return axios.get('http://www.dnd5eapi.co/api/monsters/' + num)
    .then(res => {
      let name = res.data.name;
      return name;
    })
}

export function getMonsterHealth(num) {
  return axios.get('http://www.dnd5eapi.co/api/monsters/' + num)
    .then(res => {
      let health = res.data.hit_points * 20;
      return health;
    })
}

export function getMonsterAttack(num) {
  return axios.get('http://www.dnd5eapi.co/api/monsters/' + num)
    .then(res => {
      let attack = res.data.strength * 10;
      return attack;
    })
}