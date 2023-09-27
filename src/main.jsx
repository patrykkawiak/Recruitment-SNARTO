import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './sass/main.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import store from './redux/index.jsx';
import { Provider } from 'react-redux';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);
