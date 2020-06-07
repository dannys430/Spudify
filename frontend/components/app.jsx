import React from 'react';
import {Route} from 'react-router-dom';

import {AuthRoute} from '../utils/route_utils'

import SplashContainer from './session/splash_container'
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'

import PlaylistModalContainer from './playlist/playlist_modal_container'

const App = () => (
  <div>
    <Route exact path="/us" component={SplashContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />

    <Route path="/playlist" component={PlaylistModalContainer} />

  </div>
)

export default App;