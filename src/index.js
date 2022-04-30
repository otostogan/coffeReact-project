import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import './assets/style/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
  document.getElementById('root')
);
