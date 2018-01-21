import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import store from './store'
import ReactState from './components/ReactState'
import ConnectAll from './components/ConnectAll'
import ConnectOne from './components/ConnectOne'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/react-state">React State</Link></li>
              <li><Link to="/connect-all">Connect All</Link></li>
              <li><Link to="/connect-one">Connect One</Link></li>
            </ul>

            <Route exact path="/react-state" component={ReactState} />
            <Route exact path="/connect-all" component={ConnectAll} />
            <Route exact path="/connect-one" component={ConnectOne} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
