import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ListRoute from './routes/ListRoute';
import RegisterRoute from './routes/RegisterRoute';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Registrar</Link>
      <Link to="/list" className="nav-link">Listar</Link>
    </nav>
  );
}

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <RegisterRoute />
            } />
            <Route path="/list" element={
              <ListRoute />
            } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;