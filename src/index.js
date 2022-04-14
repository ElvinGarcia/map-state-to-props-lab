import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageUsers from './reducers/manageUsers';
import {Provider} from 'react-redux'



ReactDOM.render(
  <Provider>
  <App />
  </Provider>
  ,
  document.getElementById('root')
);
