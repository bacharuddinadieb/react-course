import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['home', 'profile', 'contact', 'infoCorona'];
  const menuUserAuthenticated = () => {
    console.log(isUserAuthenticated());
    if (isUserAuthenticated()) {
      return (
        <>
          <Link to="/produk">
            <div className="menu">produk</div>
          </Link>
          <span>logout</span>
        </>
      );
    }
    return '';
  };
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {menuUserAuthenticated()}
    </div>
  );
};
export default Header;
