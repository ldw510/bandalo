import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
