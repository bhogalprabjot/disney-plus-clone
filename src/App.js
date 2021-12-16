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
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail/:id" element={<Details />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
