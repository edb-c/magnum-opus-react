import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Overview extends Component {
	render() {
		return (
			<div>
				<Jumbotron className='jumbtron' fluid>
					<h1>Overview of React/Redux</h1>
					<p>
						React is an open-source Javasciprt library created by Facebook for
						building complex, interactive UIs in web and mobile applications. It
						is often referred to at the "V" in the MVC architecture.
					</p>
					<p>
						A component is a piece of the user interface, that are independent,
						isolated and can be reusable. Every React application has the root
						component, containing other child components. In essence, this is a
						tree of components.
					</p>
					<p>
						A component is typically implemented as a Javascript class that has
						a state and render method. State is the data to be displayed and
						Render method describes what the UI will look like. The output of
						the Render method, is a React Element. This is a Javascript Object
						that represents the DOM element in memory - the Virtual DOM.
					</p>
					<p>
						When state changes, a new React element is created which is compared
						to previous version and updates the changes on the Virtual DOM.
					</p>
				</Jumbotron>
			</div>
		);
	}
}
export default Overview;
