import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

import 'styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
