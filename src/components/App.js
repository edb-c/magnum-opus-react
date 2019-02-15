//Other option:
//  import React from 'react';
import React, { Component } from 'react';

import { Route, NavLink, HashRouter} from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Overview from './Overview';
import ProjectRequirements from './ProjectRequirements';
import TheNumbers from '../container/TheNumbers';
import "../assets/App.css";

class App extends Component {   

  render() {  
    return (
<HashRouter>
<div>
<Header />
  <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/overview">Overview of React/Redux</NavLink></li>
            <li><NavLink to="/projectRequirements">The Project Requirements</NavLink></li>
            <li><NavLink to="/thenumbers">Demo: The Lucky Numbers</NavLink></li>
   </ul>         
    <div className="content">
      <Route exact path="/" component={Home}/>
      <Route path="/overview" component={Overview}/>
      <Route path="/projectRequirements" component={ProjectRequirements}/>
      <Route path="/thenumbers" component={TheNumbers}/>
  
    </div>
  
  </div>
  </HashRouter>
)}
} //end class App

export default App;