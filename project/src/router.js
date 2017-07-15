import React from 'react';
import {Route, HashRouter} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Race from './components/Race/Race';
import Class from './components/Class/Class';

export default (

  <HashRouter>
    <div>

      <Route component={Landing} exact path="/" />
      <Route component={Race} path="/race" />
      <Route component={Class} path="/class" />

    </div>
  </HashRouter>
)