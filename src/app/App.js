import React, { Component } from 'react';
import {
    Route,
    HashRouter,
    Redirect,
    Switch
} from 'react-router-dom';

import Full from './_containers/Full/Full';
import Auth from './_containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div>
          <HashRouter>
              <Switch>
                  <Route path="/app" name="App" component={Full}/>
                  <Route path="/auth" name="Auth" component={Auth}/>
                  <Redirect from="/" to="/auth"/>
              </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
