import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import store from './store'
import NumberInput from './components/NumberInput'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/a">a</Link></li>
              <li><Link to="/b">b</Link></li>
              <li><Link to="/c">c</Link></li>
            </ul>

            <Route exact path="/a" component={A} />
            <Route exact path="/b" component={B} />
            <Route exact path="/c" component={C} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
