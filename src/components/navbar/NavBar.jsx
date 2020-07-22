import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

function NavBar() {
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }

  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
      <Link to="/performances" onClick={() => closeNav()}>Performances</Link>
      <Link to="/artists" onClick={() => closeNav()}>Artists</Link>
      <Link to="/representations" onClick={() => closeNav()}>Representation</Link>
      <Link to="/casino" onClick={() => closeNav()}>Casino</Link>
      <Link to="/contact" onClick={() => closeNav()}>Contact Us</Link>
    </div>
  )
};

export default NavBar;
