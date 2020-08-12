import React, {Component} from 'react';
import HomeContainer from './containers/HomeContainer'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
