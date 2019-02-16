import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import Llc from '../assets/Llc.png';
import '../assets/Home.css'

class Home extends Component {
  render() {
   return (
  <div>
    <Jumbotron fluid>
   
    <h1>Magnum Opus!</h1>

      <Row>
        <Col>
          <Image src={Llc} className="Home-Llc" alt="Llc" rounded />

        <h4>This is the last project for the Flatiron School Web Development!</h4>

        <p>
          It has been an incredible journey to this point!  I cannot wait for the next phase to begin!
        </p>
        </Col>
      </Row>

    </Jumbotron>
  </div>
      );
    }
  }
export default Home;