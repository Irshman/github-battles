import React from 'react';
import { NavLink } from 'react-router-dom';

const navLink = ['Home', 'Popular', 'Battle'];

const Header = () => {
  return (
    <ul className='header'>
      {navLink.map((navLink, index) => {
        return (
          <li className='header__item' key={index}>
            <NavLink
              to={navLink === 'Home' ? '/home' : navLink.toLowerCase()}
              end>
              {navLink}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Header;
