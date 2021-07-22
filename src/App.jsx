import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Detail from './Detail/Detail';
import Header from './Header/Header';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
