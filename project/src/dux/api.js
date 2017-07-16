import axios from 'axios';

export function getMonsters() {
  return axios.get('http://www.dnd5eapi.co/api/monsters')
    .then(res => res.data.results)
}