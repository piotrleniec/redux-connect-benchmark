import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import store from './store'
import ReactState from './components/ReactState'
import B from './components/B'
import C from './components/C'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/react-state">React State</Link></li>
              <li><Link to="/b">b</Link></li>
              <li><Link to="/c">c</Link></li>
            </ul>

            <Route exact path="/react-state" component={ReactState} />
            <Route exact path="/b" component={B} />
            <Route exact path="/c" component={C} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
