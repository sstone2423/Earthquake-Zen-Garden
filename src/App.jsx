import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Detail from './components/Detail/Detail';
import Header from './components/Header/Header';
import './_app.css';

/**
 * Primarily sets up routing for the application
 */
const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/detail/:earthquakeId">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
