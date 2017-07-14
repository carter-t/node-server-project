import React from 'react';
import {Route, HashRouter} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Race from './components/Race/Race';

export default (

  <HashRouter>
    <div>

        <Route component={Landing} exact path="/" />
        <Route component={Race} path="/race" />

    </div>
  </HashRouter>
)