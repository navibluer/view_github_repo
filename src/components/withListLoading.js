import '../App.css';
import React from 'react';

function WithListLoading(Component) {
	return function WihLoadingComponent({ isLoading, ...props }) {

		if (!isLoading) return <Component {...props} />;
		
		return (
			<p className='message' >
				fetching data...
			</p>
		);
	};
}
export default WithListLoading;