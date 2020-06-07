import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link className="logo2" to="/"><img src={window.logo2URL} alt="Spudify Logo" /></Link>
        <ul>
          <li><a href="https://github.com/dannys430" target="_blank"><img className="social-icons" src={window.githubURL} alt="Github Logo" /></a></li>
          <li><a href="https://www.linkedin.com/in/daniel-singer/" target="_blank"><img className="social-icons" src={window.linkedinURL} alt="Linked In Logo" /></a></li>
          {/* <li><Link to="/"><img className="social-icons" src={window.github_hoverURL} alt="Github Logo" /></Link></li>
          <li><Link to="/"><img className="social-icons" src={window.linkedin_hoverURL} alt="Linked In Logo" /></Link></li> */}
        </ul>
        
      </footer>
    )
  }
}

export default Footer;