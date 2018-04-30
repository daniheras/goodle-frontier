import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    HashRouter,
    Redirect,
    Switch
} from 'react-router-dom';

import Full from './_containers/Full/Full';
import Login from './_containers/Login/Login';

class App extends Component {
  render() {
    return (
      <div>
          <HashRouter>
              <Switch>
                  <Route path="/app" name="App" component={Full}/>
                  <Route path="/auth" name="Auth" component={Login}/>
                  <Redirect from="/" to="/app"/>
                  {/*<Redirect from="/" to="/auth"/>*/}
              </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
