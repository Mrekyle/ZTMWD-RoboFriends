import React, { Component } from 'react'


class Card extends Component {
	render() {
		return (
			<div className='bg-light-green dib br3 ma2 grow tc bw2 shadow-5 '>
				<img src={`https://robohash.org/${this.props.id}?200x200`} alt='' />
				<div>
					<h2>{this.props.name}</h2>
					<p>{this.props.email}</p>
				</div>
			</div>
	); 
	}
}

//TRADITIONAL JAVA
// const Card = ({ name, id, email }) => { - OR ADD THEM IN THE FUNCTION PARAMATERS, FOR EVEN CLEANER LOOKING CODE! REMOVING THE NEED FOR THE SECOND CONST, But I will leave it for the example.
//	const { name, id, email } = props; - THIS IS ANOTHER WAY OF GETTING THE SAME RESULST, JUST BY USING DESTRUCTURING! 
// 	return (
// 			<div>
// 				<img src={`https://robohash.org/${id}?200x200`} alt='' /> - THAT GETS THE ID NUMBER OF THE USER AND RANDOMISES THE IMAGE, SO EVERY ROBOT IS DIFFERENT.
// 				<div>
// 					<h2>{name}</h2>
// 					<p>{email}</p>
// 				</div>
// 			</div>
// 		).
// }

export default Card;