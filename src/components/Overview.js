import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Overview extends Component {
	render() {
		return (
			<div>
				<Jumbotron className='jumbtron' fluid>
					<h1>Overview of React/Redux</h1>
					<p>
						React is an open-source Javasciprt library created by Facebook in
						2011 for building complex, interactive user interfacess in web and
						mobile applications. It is often referred to at the "V" in the MVC
						architecture.
					</p>
					<p>
						React uses component-based architecture. A component is a piece of
						the user interface, that are independent, isolated and can be
						reusable. Every React application has the root component,containing
						other child components. In essence, this is a tree of components.
					</p>
					<p>
						A component is typically implemented as a Javascript class that has
						a state and render method. State is the data to be displayed and the
						render method describes what the UI will look like. The output of
						the Render method, is a React Element, which is a plan Javascript
						object. This Javascript object that represents the DOM element in
						memory - the Virtual DOM. This is a light-weight representatin of
						the DOM in memory. The Virtual DOM is cheap.
					</p>
					<p>
						When the state of a component changes, a new React element is
						created which is compared to the previous version. React will figure
						out what changed and then make updates to that part of the real DOM
						to keep it in sync with the Virtual DOM. In essence, the library is
						named React because it 'reacts' to the state changes.
					</p>
				</Jumbotron>
			</div>
		);
	}
}
export default Overview;
