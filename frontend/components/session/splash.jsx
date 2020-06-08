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
              <div className="web-player-btn-div"><Link to="/" className="web-player-btn">OPEN WEB PLAYER</Link></div>
            </div>
            <div className="section1-div2">
              <ul>
                <li><Link to=""><img src={window.test1URL} /></Link></li>
                <li><Link to=""><img src={window.test2URL} /></Link></li>
                {/* <li><Link to=""><img src={window.test3URL} /></Link></li>
                <li><Link to=""><img src={window.test4URL} /></Link></li>
                <li><Link to=""><img src={window.test5URL} /></Link></li>
                <li><Link to=""><img src={window.test6URL} /></Link></li> */}

                {/* <li><Link to=""><img src={window.img1URL} /></Link></li>
                <li><Link to=""><img src={window.img2URL} /></Link></li>
                <li><Link to=""><img src={window.img3URL} /></Link></li>
                <li><Link to=""><img src={window.img4URL} /></Link></li>
                <li><Link to=""><img src={window.img5URL} /></Link></li>
                <li><Link to=""><img src={window.img6URL} /></Link></li> */}
              </ul>
              
            </div>
          </div>
        </section>

        {/* section 2 and 3 don't have content yet */}
        {/* <section className="section2">
        </section>

        <section className="section3">
        </section> */}

        <FooterContainer />
      </div>
    )
  }
}

export default Splash;


