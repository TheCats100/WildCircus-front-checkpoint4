import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import './login.css';

function Login() {
  const [user, setUser] = useState({})
  return (
    <div className="block">
      <form className="loginForm" onSubmit={(event) => {
        event.preventDefault();
        Axios.post('http://localhost:8000/auth/login', { ...user })
          .catch((err) => console.log(err))
          .then((res) => res.data)
          .then((data) => console.log(data))
      }}>
        <label>
          Email
          <input type="text" name="email_login" required="1" onChange={(e) => setUser({...user, email: e.target.value})}/>
        </label>
        <label>
          Password
          <input type="password" name="password_login" required="1" onChange={(e) => setUser({...user, password: e.target.value})}/>
        </label>
        <button type="submit" className="loginButton">Confirm</button>
      </form>
      <Link to="/register">S'inscrire</Link>
    </div>
  )
};

export default Login;