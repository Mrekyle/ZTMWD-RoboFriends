import React, { Component }from 'react';
import Cardlist from './Cardlist';
import Scroll from './Scroll'
import SearchBox from './SearchBox' // WHEN RENCDERING A REACT APP, ALL FILES MUST START WITH A CAPITOL LETTER!!!! 
// import { robots } from './robots.js' //IF EXPORTING MULTIPLE COMPONENTS/ITEMS, IT HAS TO BE DE STRUCTURED!
import './App.css'

class App extends Component {
	constructor() {
		super()
			this.state = { // This is what is describing the app! These elements below are something that can change. 
				robots: [ ],
				searchFeild: ' '
		};
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users') //Effectlvily this is grabbing the users from a database somewhere else in the world, and updating the website in real time.
		.then(response => {
			return response.json()
		})
		.then(users => { 
			this.setState({ robots: users})
		});
}
searchChange = (event) => { // This event is allowing the inputs from the search box to change the displayed cards - When ever the state cant be defined, use arrow functions like in this project.
	this.setState({ searchFeild: event.target.value}); // This is a must do in React for when you want to change a state due to the inputs, in this case, its the value thats been inputted into the searchbar.
}
	render() {
		const robotsFilter = this.state.robots.filter(robots => { // This has been added to the render, so that instead of saying this.state.robots i now have access to robotsFilter, which filters all the robots, depending on the input from the user.
		return robots.name.toLowerCase().includes(this.state.searchFeild.toLowerCase());
		})
		if (this.state.robots.length === 0) { // Based on the time it takes to load the robots, it may put out a loading statment.
			return  <h1 className='tc'>Loading</h1>
		} else {
		return ( 
			<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchChange={this.searchChange} />
				<Scroll>
					<Cardlist robots={robotsFilter}/>
				</Scroll>
			</div>
		);
	}	
	}
}

export default App;

//Once created/during the process of building an app it is a good idea to clean the code up, and clean the file structure
//This is so its esasier to read, and easier for outside developers to come in and find the files they need.
//If needed a reference to this process, react lesson 215

//When wanting to deoply the app, react has a special feature called 'npm run build' this creates an optimised set of folders and minified 
//Code, so that the app is as fast as it possibly can be.

//To make sure that something still happens on the page when an error occurs, you can use errorBounrdy, instead of editing this code heavily
//Check out react lesson 219 for the full explination/google it. Usefull form when ever creating any app in react. The users of the build
// Wont see the error report, they will see what the error boundry says to do.