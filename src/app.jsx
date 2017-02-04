import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'appStyles';

// Load foundation
$(document).foundation();

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
