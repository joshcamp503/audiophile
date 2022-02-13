// STYLES
import './component-styles/Footer.css'

// IMAGES
import logo from '../assets/shared/desktop/logo.svg'

// COMPONENTS
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer">
      <div className="top-line">
      <NavLink to={`/`}><img src={logo} alt="logo" className="logo" /></NavLink>
        <nav className='main-nav'>
          <ul className="foot-nav">
            <NavLink to={`/`}>HOME</NavLink>
            <NavLink to={`/products/headphones`}>HEADPHONES</NavLink>
            <NavLink to={`/products/speakers`}>SPEAKERS</NavLink>
            <NavLink to={`/products/earphones`}>EARPHONES</NavLink>
          </ul>
        </nav>
      </div>
      <p className="info">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
        visit our demo facility - we’re open 7 days a week.
      </p>
      <div className="footline">
        <p className="copyright">Copyright 2021. All Rights Reserved</p>
        <nav className='social-nav'>
          <ul className="social">
            <a href="http://www.facebook.com" className="external-nav" target="_blank">
              <li className='social-link facebook'></li>
            </a>
            <a href="http://www.twitter.com" className="external-nav" target="_blank">
              <li className='social-link twitter'></li>
            </a>
            <a href="http://www.instagram.com" className="external-nav" target="_blank">
              <li className='social-link instagram'></li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default Footer;
