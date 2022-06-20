import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './containers';
import './Atomic/_settings/base.css'
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Page />
		</HashRouter>
	</React.StrictMode>
);

reportWebVitals();
