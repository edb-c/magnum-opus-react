import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import Ethel2 from '../assets/Ethel2.jpg';
//import Llc from '../assets/Llc.png';
import '../assets/Home.css';

class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid>
					<h1>Magnum Opus!</h1>
					<Row>
						<Col>
							<p>
								<h4>
									This is the last project for the Flatiron School Software
									Engineering & Web Development Program!
								</h4>
								It has been an incredible journey to this point! Thank you for
								taking time to visit this project. It serves as a building block
								to more complex projects.
								<br />
								<br />
								Live, Learn, Code!
								<br />
								<Image
									src={Ethel2}
									className='Home-Ethel2'
									alt='Ethel2'
									rounded
								/>
								<br />
							</p>
						</Col>
					</Row>
				</Jumbotron>
			</div>
		);
	}
}
export default Home;
