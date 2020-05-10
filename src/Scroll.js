import React from 'react'

const Scroll = (props) => { 
	return (
		<div style={{ overflowY: 'scroll', border: '3px solid black', height: '500px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;

// This is allowing ut to wrap whole objects with certain things, this code is allowing us to wrap the card section! 
//And allowing us to enable it to scroll without interfering with anything else on the page. This is because of the props.children tag, Only being able 
// To affect those wrapped in the 'scroll' tag. If confused, look at the udemy react lesson 214

// {{}} - This allows us to add css styling directly into the react files, the single {} is javascript and the double is jsx-css - Must be in a style tag inside the div