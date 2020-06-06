import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container'

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="background-blue">
          <h1 className="lineto-test">Listening is everything</h1>
        </div>
      </div>
    )
  }
}

export default Splash;


