import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Image from 'react-bootstrap/Image';
import Check from '../assets/Check.png';
import '../assets/Check.css'

class ProjectRequirements extends Component {
    render() {
      return (
      <div>
      <Jumbotron fluid>
   
      <h1>The Project Requirements</h1>

        <ul><Image src={Check} className="Check" alt="check"/>The code should be written in ES6 as much as possible.  </ul>
        <ul><Image src={Check} className="Check" alt="check"/>Use the create-react-app generator to start your project. </ul>
        <ul><Image src={Check} className="Check" alt="check"/>Your app should have one HTML page to render your react-redux application.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>There should be 2 container components.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>There should be 5 stateless components.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>There should be 3 routes.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>The Application must make use of react-router and proper RESTful routing.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>Use Redux middleware to respond to and modify state change.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>Make use of async actions to send data to and receive data from a server.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>Your Rails API should handle the data persistence. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>Your client-side application should handle the display of data with minimal data manipulation.</ul>
        <ul><Image src={Check} className="Check" alt="check"/>Your application should have some minimal styling.</ul>

      </Jumbotron>
</div>
      );
    }
  }
  export default ProjectRequirements;