import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import App from './app';

const Root = ({store}) => (
  <Provider store={store}>    
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

export default Root;


{/* <Provider store={store}>    give the connect function access to everything */}

// connect is like the librarian that lets members have access to book from mstp and dvd from mdtp