import React, { useEffect, useState } from 'react';
import NavBar from '../navbar/NavBar';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Artists from '../artists/Artists';
import Casino from '../casino/Casino';
import Contact from '../contact/Contact';
import Performances from '../performances/Performances';
import Login from '../log/Login';
import Register from '../log/Register';
import Accueil from './Accueil';
import Representation from '../representation/Representation';

import './home.css';
import Axios from 'axios';

const mapStateToProps = (state) => ({
  token: state.token,
  id: state.id
});

function Home({ id, token }) {
  const [user, setUser] = useState(null)

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  useEffect(() => {
    if (token) {
      Axios.get(`http://localhost:8000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setUser(data.pseudo))
        .catch((err) => console.log(err))
    }
  });

  return (
    <Router >
      <div className="navBar">
        <span className="burgerMenu" onClick={() => openNav()}>&#9776;</span>
        <NavBar />
        <Link to="/" className="titleWild">WildCircus</Link>
        {user ? <p className="userProfil">{user}</p> : <Link to="/login" className="navbarConnect">Se connecter ?</Link>}
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
          <Route component={Login} exact path="/login" />
          <Route component={Register} exact path="/register" />
          <Route exact path="/representations">
            <Representation />
          </Route>
        </div>
      </Switch>
    </Router>
  )
};

export default connect(mapStateToProps)(Home);
