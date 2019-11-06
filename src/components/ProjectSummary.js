import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Check from '../assets/Check.png';
import '../assets/Check.css';

class ProjectSummary extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid>
					<h1>The Project Summary</h1>

					<ul>
						<Image src={Check} className='Check' alt='check' />
						The code is written in ES6 as much as possible.{' '}
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						It uses the create-react-app generator to start.{' '}
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						It has one HTML page to render the React-Redux application.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						There are 2 container components.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						There are 5 stateless components.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						There are 3 routes.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						The Application makes use of react-router and proper RESTful
						routing.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						Uses Redux middleware to respond to and modify state change.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						Makes use of async actions to send data to and receive data from a
						server.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						The Rails API handles the data persistence. Uses fetch() within
						actions to GET and POST data from API.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						The client-side application handles the display of data with minimal
						data manipulation.
					</ul>
					<ul>
						<Image src={Check} className='Check' alt='check' />
						The application uses Bootstrap for responsive styling.
					</ul>

					<p>
						<br />
						Summary of this demo:
						<br />
						<li>
							The Past 10 Winning NY Lotto Numbers table is consumed from the NY
							Lottery Api.
						</li>
						<li>Limited the number of records fetched to 10.</li>
						<li>Made use of the HTTParty gem and ActiveResource.</li>
						<li>
							Stored Lucky Numbers table is fetched from a Postgres database in
							Rails.
						</li>
						<li>A user has the option to add and/or delete stored data.</li>
					</p>
					<p>
						Possible future enhancements include adding pagination to the
						Nylotterapi table and implementing a Play These Numbers generator,
						that would use the Law of Averages to determine, as well as the User
						Register/Login features.
					</p>
				</Jumbotron>
			</div>
		);
	}
}
export default ProjectSummary;
