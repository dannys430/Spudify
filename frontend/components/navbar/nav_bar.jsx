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
      <Link className="nav1-btns" to="/signup">Sign Up</Link>
      <Link className="nav1-btns" to="/login">Log In</Link>
    </div>
  );

  return (
    <header>
      <nav className="nav1">
        <img className="logo2" src={window.logo2URL} alt="Spudify Logo" />
        <div className="nav1-btns-div">
          {display}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
