import '../style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const RepoInfo = (props) => {
	const { infos } = props;
	console.log(infos);

	if (!infos || infos.length === 0) {
		return (
			<p style={{ textAlign: 'center', fontSize: '20px' }}>
				No information, sorry...
			</p>
		);
	}

	return (
		<div>
			<h2><b>Full Name : </b>{infos.full_name}</h2>
			<div><b>Description : </b>{infos.description}</div>
			<div><b>Stars : </b>{infos.stargazers_count}</div>
			<br></br>
			<Link to={infos.html_url}> Link </Link>
		</div>
	);
};

export default RepoInfo;