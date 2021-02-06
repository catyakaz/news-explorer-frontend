import React from 'react';

import { Link } from 'react-router-dom';

import './Footer.css';

import facebookIcon from '../../images/facebook_icon.svg';
import githubIcon from '../../images/github_icon.svg';


function Footer() {
  return (
    <footer className="footer side-padding">
      <div className='footer__copyright'>
        © 2020 Supersite, Powered by News API
      </div>
      <div className='footer__menu'>
        <nav className='footer__navigation'>
          <Link to='/' className='footer__navigation-item' >Главная</Link>
          <a rel="noreferrer" target="_blank" href='https://praktikum.yandex.ru' className='footer__navigation-item'>Яндекс Практикум</a>
        </nav>
        <div className='footer__social-container'>
          <a rel="noreferrer" target="_blank" href='https://github.com' className='footer__social-icon'><img src={githubIcon} alt='github' /></a>
          <a rel="noreferrer" target="_blank" href='https://facebook.com' className='footer__social-icon'><img src={facebookIcon} alt='github' /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;