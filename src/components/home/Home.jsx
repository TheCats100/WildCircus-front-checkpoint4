import React from 'react';
import NavBar from '../navbar/NavBar';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function Home() {
  return (
    <Router >
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </Router>
  )
};

export default Home;
