import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import './register.css';

function Register({ history }) {
  const [user, setUser] = useState({})
  return (
    <div className="block">
      <form className="registerForm" onSubmit={(event) => {
        event.preventDefault();
        Axios.post('http://localhost:8000/users', { ...user, wildpoints: 100, admin: 0})
          .then(() => history.push('/login'))
          .catch((err) => console.log(err))
      }}>
        <label>
          Email
          <input type="text" name="email_register" required="1" onChange={(e) => setUser({...user, email: e.target.value})}/>
        </label>
        <label>
          Password
          <input type="password" name="password_register" required="1" onChange={(e) => setUser({...user, password: e.target.value})}/>
        </label>
        <label>
          Pseudo
          <input type="text" name="pseudo_register" required="1" onChange={(e) => setUser({...user, pseudo: e.target.value})}/>
        </label>
        <button type="submit" className="registerButton">Confirm</button>
      </form>
      <Link to="/login">Se connecter</Link>
    </div>
  )
};

export default Register;