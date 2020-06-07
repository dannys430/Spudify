import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container'
import FooterContainer from '../footer/footer_container'
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBarContainer />

        <section className="section1">
          <div className="section1-div">
            <div className="section1-div1">
              <h1>Jump back in</h1>
              <h2>Pick up your music right where you left off.</h2>
              {/* <Link to="/" className="login-button">OPEN WEB PLAYER</Link> */}
            </div>
            <div className="section1-div2">
              <div><img src="/assets/splash/1.jpeg" /></div>
              <div><img src="/assets/splash/2.jpeg" /></div>
              <div><img src="/assets/splash/3.jpeg" /></div>
              <div><img src="/assets/splash/4.jpeg" /></div>
              <div><img src="/assets/splash/5.jpeg" /></div>
              <div><img src="/assets/splash/6.jpeg" /></div>
              
            </div>
          </div>
        </section>

        <section className="section2">
        </section>

        <section className="section3">
        </section>

        <FooterContainer />
      </div>
    )
  }
}

export default Splash;


