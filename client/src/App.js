import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontDisplay from './components/FrontDisplay';
import Signup from './components/Signup';
import Posts from './components/Posts';
import Front from './components/Frontpage';
import Games from './components/Games';
import Profile from './components/Profile';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
              <Switch>
                <Route path="/" exact component={Front} />
                <Route path="/home" component={Posts} />
                <Route path="/testing" component={FrontDisplay} />
                <Route path="/register" component={Signup} />
                <Route path="/games" component={Games} />
                <Route path="/profile" component={Profile} />
              </Switch>
          </div>
        </Router>
      </Provider>
    )

  }
};

export default App;
