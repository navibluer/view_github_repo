import React from 'react';

function WithListLoading(Component) {
	return function WihLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style = {{ textAlign: 'center', fontSize: '20px' }} >
				fetching data...
			</p>
		);
	};
}
export default WithListLoading;