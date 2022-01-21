import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },

  ];

  return (
    <div className="navbar">
      <h1><a href="/">Book Store</a></h1>
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}

              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
