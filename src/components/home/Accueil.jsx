import React from 'react';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import "./accueil.css"

function Acceuil() {
  return (
    <>
      <div className="block">
        <h1 className="introTitle">Story :</h1>
        <p className="introPara">At the dawn of the 1980’s, a troupe of performers founded by PILANI Mario took their talent to the streets of Tinqueux, this group would form the core of what would grow into Wild Circus. This crew had an eclectic show, highlighting jugglers, dancers, fire breathers, and musicians who pleased local fans with their act. Little did these early fans and performers know that these embryonic beginnings would lead to something magical, exciting, and revolutionary on a global scale.</p>
        <Link to="/representations" className="introLink">Next Representations</Link>
      </div>
    </>
  )
};

export default Acceuil;