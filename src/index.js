import React, { Suspense, lazy } from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const User = lazy(() => import('./components/User'));

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
			</Routes>
		</Suspense>
	</Router>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
