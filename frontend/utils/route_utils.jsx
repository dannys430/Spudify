import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom'

const mSTP = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    loggedOut: Boolean(!state.session.currentUser)
  }
}

const Auth = ({loggedIn, path, component: Component }) => (
  <Route 
    path={path} 
    render={props => (
      loggedIn ? <Redirect to="/us" /> : <Component {...props}/>
    )}
  />
);

const Auth2 = ({loggedOut, path, component: Component }) => (
  <Route 
    path={path} 
    render={props => (
      loggedOut 
        ? <>
            <Redirect to="/us" />
            {alert('must be signed in')}
          </>
        : <Component {...props}/>
    )}
  />
);

export const AuthRoute = withRouter(connect(mSTP)(Auth))

export const AuthRoute2 = withRouter(connect(mSTP)(Auth2))