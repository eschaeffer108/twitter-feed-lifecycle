import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TwitterFeed from './containers/TwitterFeed';
import data from './constants/data';

ReactDOM.render(
  <TwitterFeed tweets={data} />,
  document.getElementById('app')
);
