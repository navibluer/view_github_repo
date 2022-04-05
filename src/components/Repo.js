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

	useEffect(() => {
		setRepoState({ loading: true});
		const apiUrl = `https://api.github.com/repos/${userName}/${repoName}`;
		const options = {
			method: 'GET',
			headers: {
				Authorization: "token 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",
			},
		};

		fetch(apiUrl, options)
			.then((res) => res.json())
			.then((infos) => {
				// console.log(infos.id);
				setRepoState({ loading: false, infos: infos });
			});
	}, [setRepoState]);

	return(
		<div className='App'>
			<Header />

			<ListLoading
				isLoading = { repoState.loading }
				infos = { repoState.infos }
			/>
		</div>
	);
}

export default Repo;