import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
  const display = currentUser ? (
    <ul className="nav1-ul">
      <li>Hello, {currentUser.name}</li>
      <li><button onClick={logout}>Log Out</button></li>
    </ul>
  ) : (
    <ul className="nav1-ul">
      <li><Link to="/signup">Sign up</Link></li>
      <li><Link to="/login">Log In</Link></li>
    </ul>
  );

  return (
    <header>
      <Link className="logo2" to="/"><img src={window.logo2URL} alt="Spudify Logo" /></Link>
        <nav className="nav1">
          <ul className="nav1-ul">
            <li><a href="https://github.com/dannys430" target="_blank">Git Hub</a></li>
            <li><a href="https://www.linkedin.com/in/daniel-singer/" target="_blank">Linked In</a></li>
            <li>|</li>
            {display}
          </ul>
        </nav>
    </header>
  )
}

export default NavBar
