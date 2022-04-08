import '../App.css';
import '../style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const List = (props) => {
	const { repos } = props;
	const messageStyle = {
		textAlign: 'center',
		fontSize: '20px',
	}

	if (repos?.message === 'Not Found') {
		return (
			<p className='message' >
				User not found, sorry...
			</p>
		);
	}

	if (!repos || repos.length === 0) {
		return (
			<p className='message' >
				User has no repos, sorry...
			</p>
		);
	}

	return (
		<table className = "List-table" >
			<caption>
				<h3> Available Public Repositories </h3>
			</caption>

			<thead>
				<tr>
					<th width={56}> # </th>
					<th> Name </th>
					<th> Description </th>
					<th> Stars </th>
				</tr>
			</thead>

			<tbody>

				{repos.map( (repo, index) => {
					return (
						<tr key = {repo.id} >

							<td>
                <Link to = {repo.name} > {index + 1} </Link>
              </td>

							<td>
                <Link to = {repo.name} > {repo.name} </Link>
              </td>

							<td>
                <Link to = {repo.name} > {repo.description} </Link>
              </td>

							<td>
                <Link to = {repo.name} > {repo.stargazers_count} </Link>
              </td>

						</tr>
					);
				})}

			</tbody>
		</table>
	);
};
export default List;