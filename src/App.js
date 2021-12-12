import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/detail" element={<Details/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
