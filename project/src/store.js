import {createStore, applyMiddleware, combineReducers} from "redux";
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dungeonReducer from './ducks/dungeonReducer';

const reducer = combineReducers({
  dungeon: dungeonReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);