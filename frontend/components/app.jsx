import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {AuthRoute, AuthRoute2} from '../utils/route_utils';

import SplashContainer from './session/splash_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

import HomeContainer from  './home/home_container';

import SongFormContainer from  './song/song_form_container';

import ModalContainer from  './modal/modal_container';




const App = () => (
  <div>
    <ModalContainer/>

      <Switch>
        <Route exact path="/us" component={SplashContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route exact path="/songform" component={SongFormContainer} />
        <AuthRoute2 path="/" component={HomeContainer} />   
      </Switch>

  



  </div>
)

export default App;