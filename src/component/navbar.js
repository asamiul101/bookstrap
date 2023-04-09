import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navHeader'>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: 'whitesmoke', fontSize: 36 }}
        >
          BookStrap
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
