import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainSection from './components/MainSection';
import SideMenu from './components/SideMenu';

import './css/tejuino.css';
import './css/style.css';

function App() {
  return (
    <div className = 'container container-main set-full'>
      <div className = 'row row-main set-full'>
        <Router>
          <Switch>
            <Route path = '/models'>
              <div className = 'col-12'>Models</div>
            </Route>
            <Route path = '/'>
              <div className = 'col-sm-5'>
                <SideMenu />
              </div>
              <div className = 'col-sm-7'>
                <MainSection />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
