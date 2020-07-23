import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';

import './login.css';

const mapStateToProps = (state) => ({
  token: state.token,
});

function Login({ dispatch, history }) {
  const [user, setUser] = useState({})
  return (
    <div className="block">
      <form className="loginForm" onSubmit={(event) => {
        event.preventDefault();
        Axios.post('http://localhost:8000/auth/login', { ...user })

          .then((res) => res.data)
          .then((data) => {
            dispatch({
              type: 'SETTOKEN',
              newToken: data.token,
              newId: data.user.id,
              newadmin: data.user.admin,
              newWildPoints: data.user.wildpoints
            })
            history.push('/')
          })
          .catch((err) => {
            console.log(err)
            alert('error')
          })
      }}>
        <label className="colorText">
          Email
          <input type="text" name="email_login" required="1" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </label>
        <label className="colorText">
          Password
          <input type="password" name="password_login" required="1" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </label>
        <button type="submit" className="loginButton">Confirm</button>
      </form>
      <Link to="/register" className="colorText">S'inscrire</Link>
    </div>
  )
};

export default connect(mapStateToProps)(Login);