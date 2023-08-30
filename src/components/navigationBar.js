// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Student App</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/list">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
