import logo from '../logo.svg';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import '../style.css';
import List from './List';
import withListLoading from './withListLoading';

function User(props) {
	const ListLoading = withListLoading(List);
	const { userName } = useParams();
	const [userState, setUserState] = useState({
		loading: false,
		userName: 'hacktivist123',
		// userName: 'navibluer',
		repos: null,
	});

	useEffect(() => {
		setUserState({ loading: true});
		console.log(props);
		const apiUrl = `https://api.github.com/users/${userName}/repos`;
		// const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
		fetch(apiUrl)
			.then((res) => res.json())
			.then((repos) => {
				setUserState({ loading: false, repos: repos });
			});
	}, [setUserState]);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
			<div className='User'>
				<div className='User-header'>
					<h1>Repositories</h1>
				</div>
				<div className='User-repo'>
					<ListLoading isLoading={userState.loading} repos={userState.repos} />
				</div>
			</div>
		</div>
	);
}

export default User;
