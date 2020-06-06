import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container'
import FooterContainer from '../footer/footer_container'


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


