import React from 'react';
import {Route} from 'react-router-dom';

import {AuthRoute} from '../utils/route_utils'

import SplashContainer from './session/splash_container'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'

const App = () => (
  <div>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />

  </div>
)

export default App;