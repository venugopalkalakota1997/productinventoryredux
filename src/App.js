import React from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
    <Navbar></Navbar>
  </HashRouter>
  );
}

export default App;
