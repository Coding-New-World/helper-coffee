import './App.css';

import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route exact path='/shop/:hashId'>
					<ShopPage />
				</Route>
				<Route path='/'>
					<RegisterPage />
				</Route>
			</Switch>
		</Router>
	);
}