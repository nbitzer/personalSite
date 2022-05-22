// React related imports
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// CSS imports
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Component imports
import Home from "./components/Home"
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;