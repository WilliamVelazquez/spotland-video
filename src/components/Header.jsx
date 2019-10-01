import React from 'react';

import logo from '../assets/static/logo.svg';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <div className='header__logo_container'>
      <img className='header__img' src={logo} alt='Spotland Video' />
      <span className='header__title'>Spotland</span>
    </div>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='User Icon' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
