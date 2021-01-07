import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav/nav';
import Resume from './components/resume';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';
import protfollio from './components/protfollio/protfollio';

function App() {
  return (
    <>
    <Nav/>
  
    <Route path="/" exact component={Home}/>
    <Route path="/resume" exact component={Resume}/>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/protfollio" exact component={protfollio}/>
    <Footer/>
    </>
  );
}

export default App;
