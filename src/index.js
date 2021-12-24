import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/animated.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './assets/style.scss';
import './assets/style_grey.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { MoralisProvider } from "react-moralis";

//redux store
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<MoralisProvider appId="xyiu0UFbFkNsbv2S87Omip3XRw3geHe15ehCN36s" serverUrl="https://ftulh2rfadas.usemoralis.com:2053/server">
			<App />
		</MoralisProvider>
	</Provider>,
	document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();