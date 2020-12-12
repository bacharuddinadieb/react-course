/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, deleteCookie } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['home', 'profile', 'contact', 'infoCorona'];

  const swallWrapper = withReactContent(Swal);

  const logoutClicked = () => {
    swallWrapper
      .fire({
        icon: 'question',
        title: 'Yakin mau logout?',
        showCancelButton: 'Batal',
        confirmButtonText: 'Iya',
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'info',
            title: 'Berhasil logout',
            html: 'Anda akan diarahkan ke halaman awal :)',
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: false,
          }).then((resultModal2) => {
            if (resultModal2.dismiss || resultModal2.isConfirmed) {
              deleteCookie('userData');
              deleteCookie('token');
              window.location.replace('/');
            }
          });
        }
      });
  };
  const menuUserAuthenticated = () => {
    console.log(isUserAuthenticated());
    if (isUserAuthenticated()) {
      return (
        <>
          <Link to="/produk">
            <div className="menu">produk</div>
          </Link>
          <div
            className="menu"
            style={{ cursor: 'pointer', color: '#000000aa' }}
            onClick={() => {
              logoutClicked();
            }}
          >
            logout
          </div>
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
