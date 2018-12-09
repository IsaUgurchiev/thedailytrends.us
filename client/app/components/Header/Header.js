import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <Link to="/" className="logo">
        <span className="logo-prefix">Daily</span>
        <span className="logo-postfix">Trend</span>
      </Link>
    </nav>
  </header>
);

export default Header;
