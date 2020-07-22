import React from 'react';
import NavBar from '../navbar/NavBar';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Artists from '../artists/Artists';
import Casino from '../casino/Casino';
import Contact from '../contact/Contact';
import Performances from '../performances/Performances';
import Login from '../log/Login';
import Register from '../log/Register';
import Accueil from './Accueil';
import Representation from '../representation/Representation';

import './home.css';

function Home() {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  return (
    <Router >
      <div className="navBar">
        <span className="burgerMenu" onClick={() => openNav()}>&#9776;</span>
        <NavBar />
        <Link to="/" className="titleWild">WildCircus</Link>
        <Link to="/login" className="navbarConnect">Se connecter ?</Link>
      </div>
      <Switch>
        <div id="componentsBlock">
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/artists">
            <Artists />
          </Route>
          <Route exact path="/casino">
            <Casino />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/performances">
            <Performances />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/representations">
            <Representation />
          </Route>
        </div>
      </Switch>
    </Router>
  )
};

export default Home;
