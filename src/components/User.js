import '../App.css';
import '../style.css';
import Header from './Header';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from './List';
import withListLoading from './withListLoading';

function User() {
	const ListLoading = withListLoading(List);
	const { userName } = useParams();
	const [userState, setUserState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(() => {
		setUserState({ loading: true});
		// defunkt
		const apiUrl = `https://api.github.com/users/${userName}/repos`;
		const options = {
			method: 'GET',
			headers: {
				Authorization: "token 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",
			},
		};
		
		fetch(apiUrl, options)
			.then((res) => res.json())
			.then((repos) => {
				setUserState({ loading: false, repos: repos });
			});
	}, [setUserState]);

	return (
		<div className='App'>
			<Header />
			
			<div className='User'>
				<div className='User-header'>
					<h2 >[ {userName} ]</h2>
				</div>
				<div className='User-repo'>

					<ListLoading
						isLoading = { userState.loading }
						repos = { userState.repos }
					/>

				</div>
			</div>
		</div>
	);
}

export default User;
