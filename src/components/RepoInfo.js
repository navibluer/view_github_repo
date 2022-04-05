import '../style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const RepoInfo = (props) => {
	const { infos } = props;
	console.log(infos);

	if (!infos || infos.length === 0) {
		return (
			<p style = {{ textAlign: 'center', fontSize: '20px' }}>
				No information, sorry...
			</p>
		);
	}

	return (
		<div className = 'RepoInfo' >
			<h2 className = 'header' > [ {infos.full_name} ] </h2>

			<div className = 'title' > Description : </div>
			<div className = 'content' > {infos.description} </div>

			<div className = 'title' > Stars : </div>
			<div className = 'content' > {infos.stargazers_count} </div>

			<div className = 'title' > Created at : </div>
			<div className = 'content' > {infos.created_at} </div>

			<div className = 'title' > Clone url : </div>
			<div className = 'content' > {infos.clone_url} </div>

			<div className='link' >
				<a
					href = {infos.html_url}
					target = "_blank"
					rel = "noreferrer"
				>
						[ Link ]
				</a>
			</div>
		</div>
	);
};

export default RepoInfo;