import React from 'react';

const SearchBox = ({ searchFeild, searchChange}) => {
	return (
		<div className='pa2'>
			<input className='pa3 ba b--green bg-light est-blue' type='search' placeholder='Search Robots' onChange={searchChange} /> 
		</div> // The onChange, element above, allows what ever paramanter is set from the App to change from what ever input is being received.
	);
}

export default SearchBox;