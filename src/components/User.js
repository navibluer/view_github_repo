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
	const [loading, setLoading] = useState(false);
	const [repos, setRepos] = useState([]);
	let page = 1;

	const getMoreRepos = () => {
		const apiUrl = `https://api.github.com/users/${userName}/repos`;
		const per_page = 10;
		const params = `?per_page=${per_page}&page=${page}`
		// FIXME: Store token with env variable
		// const options = {
		// 	headers: {
		// 		Authorization: "token ",
		// 	},
		// };

		// fetch(apiUrl + params, options)
		fetch(apiUrl + params)
			.then( (res) => res.json() )
			.then( (data) => {
				// FIXME: Use ErrorBoundary
				console.log(data);
				if (data.length > 0) {
					setRepos(prevRepos => [...prevRepos, ...data]);
				} else {
					setRepos(data);
				}
				setLoading(false);
			});

		page += 1;
	};

	const handleScroll = (e) => {
		if (
			window.innerHeight + e.target.documentElement.scrollTop >=
			e.target.documentElement.scrollHeight
		) {
			getMoreRepos();
		}
	};

	useEffect(() => {
		setLoading(true);
		window.addEventListener('scroll', handleScroll);
		getMoreRepos();
	}, []); // FIXME

	return (
		<div className = 'App'>
			
			<Header />
			
			<div className = 'User'>
				<div className = 'User-header'>
					<h2 > [ {userName} ] </h2>
				</div>
				<div className = 'User-repo'>
					<ListLoading
						isLoading = {loading}
						repos = {repos}
					/>

				</div>
			</div>
		</div>
	);
}

export default User;
