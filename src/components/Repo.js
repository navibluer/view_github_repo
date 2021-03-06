import '../App.css';
import '../style.css';
import Header from './Header';
import RepoInfo from './RepoInfo'
import withListLoading from './withListLoading';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Repo() {
	const ListLoading = withListLoading(RepoInfo);
	const { userName, repoName } = useParams();
	const [repoState, setRepoState] = useState({
		// { userName, repoName } = useParams();
		loading: false,
		infos: null,
	});

	useEffect( () => {
		setRepoState({ loading: true});
		const apiUrl = `https://api.github.com/repos/${userName}/${repoName}`;
		// FIXME: Store token with env variable
		// const options = {
		// 	headers: {
		// 		Authorization: "token ",
		// 	},
		// };

		// fetch(apiUrl , options)
		fetch(apiUrl)
			.then( (res) => res.json())
			.then( (infos) => {
				setRepoState({ loading: false, infos: infos });
			});
	}, [setRepoState]); // FIXME

	return(
		<div className = 'App'>
			<Header />

			<ListLoading
				isLoading = {repoState.loading}
				infos = {repoState.infos}
			/>
		</div>
	);
}

export default Repo;