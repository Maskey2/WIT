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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/alumni" component={Alumni}></Route>
        <Route path="/discussion" component={Discussion}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/board" component={Board}></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}


export default App;