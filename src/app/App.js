import React, { Component } from 'react';
import {
    Route,
    HashRouter,
    Redirect,
    Switch,
    BrowserRouter
} from 'react-router-dom';

import Full from './_containers/Full/Full';
import Auth from './_containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
              <Switch>
                  <Route path="/app" name="App" component={Full}/>
                  <Route path="/auth" name="Auth" component={Auth}/>
                  <Redirect from="/" to="/auth"/>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
