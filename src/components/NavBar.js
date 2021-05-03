import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    <li>
    <NavLink
      to="/"
    >Home</NavLink>
    </li>
    <li>
    <NavLink
      to="/movies"
      exact
    >Movies</NavLink>
    </li>
    <li>
    <NavLink
      to="/directors"
    >Directors</NavLink>
    </li>
    <li>
    <NavLink
        to="/actors"
        exact
      >Actors</NavLink>
    </li>
    </div>
  );
};

export default NavBar;
