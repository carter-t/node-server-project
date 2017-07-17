import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Race from './components/Race/Race';
import Class from './components/Class/Class';
import Character from './components/Character/Character';
import Battleground from './components/Battleground/Battleground';
import YouWin from './components/YouWin/YouWin';
import GameOver from './components/GameOver/GameOver';

export default (
  <HashRouter>
    <div>

      <Route component={Landing} exact path="/" />
      <Route component={Race} path="/race" />
      <Route component={Class} path="/class" />
      <Route component={Character} path="/character" />
      <Route component={Battleground} path="/battleground" />
      <Route component={YouWin} path="/win" />
      <Route component={GameOver} path="/lose" />

    </div>
  </HashRouter>
)