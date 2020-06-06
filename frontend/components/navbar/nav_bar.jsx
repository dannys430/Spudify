import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.name}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav">
      <img className="logo" src={window.logoURL} alt=""/>
      <nav>
        {display}
      </nav>
    </header>
  )
}

export default NavBar
