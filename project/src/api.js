import axios from 'axios';

export const getRaces = () => {
  return axios.get('http://www.dnd5eapi.co/api/races/')
    .then(res => res.data.results)
}