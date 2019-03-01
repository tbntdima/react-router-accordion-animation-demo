import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccordionRoute from './AccordionRoute';

import Home from './Home';
import About from './About';
import Contact from './Contact';

import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <AccordionRoute exact path="/" component={Home}/>

        <Link to="/about">About</Link>
        <AccordionRoute path="/about" component={About}/>

        <Link to="/contact">Contact</Link>
        <AccordionRoute path="/contact" component={Contact}/>
      </div>
    );
  }
}

export default App;
