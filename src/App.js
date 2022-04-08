import './index.css';
import './App.css'
import React, { Suspense, lazy } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const User = lazy(() => import('./components/User'));
const Repo = lazy(() => import('./components/Repo'));
const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'));

const App = () => (
	<Router>
		<Suspense
			fallback = { <div className = 'message'>Loading...</div> }
		>
			<Routes>
				
				<Route
					path = "/"
					element = {<Home />}
				/>

				{/* <ErrorBoundary> */}
					<Route
						path="/users/:userName/repos"
						element = {<User/>}
					/>
					<Route
						path="/users/:userName/repos/:repoName"
						element = {<Repo/>}
					/>
				{/* </ErrorBoundary> */}

			</Routes>
		</Suspense>
	</Router>
);

export default App;