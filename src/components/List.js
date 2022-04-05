import '../style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const List = (props) => {
	const { repos } = props;

	if (!repos || repos.length === 0) {
		return (
			<p style={{ textAlign: 'center', fontSize: '20px' }}>
				No repos, sorry...
			</p>
		);
	}

	return (
		<table className="List-table">
			<caption>
				<h3>Available Public Repositories</h3>
			</caption>

			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Stars</th>
				</tr>
			</thead>

			<tbody>
				{repos.map((repo) => {
					return (
						<tr key={repo.id}>
							<td><Link to={repo.name}> {repo.name} </Link></td>
							<td><Link to={repo.name}> {repo.description} </Link></td>
							<td><Link to={repo.name}> {repo.stargazers_count} </Link></td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
export default List;