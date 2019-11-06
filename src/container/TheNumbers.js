import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { fetch_myluckynumbers } from '../actions/fetch_myluckynumbers';

import { connect } from 'react-redux';

import Myluckynumbers from './Myluckynumbers';
import MyluckynumbersForm from './MyluckynumbersForm';
import Nylotteryapi from '../container/Nylotteryapi';

import Image from 'react-bootstrap/Image';
import Numbers from '../assets/TheNumbers.jpg';
import '../assets/Numbers.css';

class TheNumbers extends Component {
	componentDidMount() {
		this.props.fetch_myluckynumbers();
	}

	render() {
		return (
			<div>
				<Jumbotron fluid>
					<h1>Demo: The Lucky Numbers</h1>
					<Container fluid>
						<Row>
							<Image
								src={Numbers}
								className='TN-Numbers-img'
								alt='Numbers'
								rounded
							/>
						</Row>
						<Row>
							<Col md={4}>
								<Nylotteryapi
									fetch_nylotteryapi={this.props.nylotteryapiNumbers}
								/>
							</Col>

							<Col md={4}>
								<Myluckynumbers winningNumbers={this.props.winningNumbers} />
							</Col>

							<Col md={4}>
								<h3> Enter New Set of Lotto Numbers</h3>
								<MyluckynumbersForm
									create_myluckynumbers={this.props.create_myluckynumbers}
								/>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}
//Takes State which is part of the store and sends it to the component
//as Props. (this.props.winningNumbers)
const mapStateToProps = state => {
	return {
		winningNumbers: state.winners.winnersPayload,
		nylotteryapiNumbers: state.nylotteryapi.nylotteryapiPayload
	};
};
//Export default TheNumbers is dumb component, does not know anything about the data.
//When connect is used, it 'connects' the component to the application store.
//Now is smart component or container.
export default connect(
	mapStateToProps,
	{ fetch_myluckynumbers }
)(TheNumbers);
