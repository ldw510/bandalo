import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';




function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/aboutMe' exact component={AboutMe} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
