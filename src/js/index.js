import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root';

import Perf from 'react-addons-perf';

const isProduction = process.env.NODE_ENV === 'production';
if(!isProduction){
  window.Perf = Perf;
}


// Render it to DOM
ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
