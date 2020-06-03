import React from 'react';
import {Route} from 'react-router-dom';

import {AuthRoute} from '../utils/route_utils'

import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import NavBarContainer from './navbar/nav_bar_container'

const App = () => (
  <div className="div">
    <Route path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />

  </div>
)

export default App;