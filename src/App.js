import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Discussion from './components/Discussion';
import Alumni from './components/Alumni';
import Board from './components/Board';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/alumni" component={Alumni}></Route>
      <Route path="/discussion" component={Discussion}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/board" component={Board}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Footer />
    </Router>
  );
}


export default App;