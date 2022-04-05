import './index.css';
import React, { Suspense, lazy } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const User = lazy(() => import('./components/User'));
const Repo = lazy(() => import('./components/Repo'));

const App = () => (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/users/:userName/repos"
					element={<User/>}
				/>
				<Route
					path="/users/:userName/repos/:repoName"
					element={<Repo/>}
				/>
			</Routes>
		</Suspense>
	</Router>
);

export default App;