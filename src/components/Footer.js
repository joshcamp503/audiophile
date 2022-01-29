// STYLES
import './component-styles/Footer.css'

// IMAGES
import logo from '../assets/shared/desktop/logo.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-line">
        <img src={logo} alt="logo" className="logo" />
        <nav className='main-nav'>
          <ul className="nav-menu">
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
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
            <li className='social-link facebook'></li>
            <li className='social-link twitter'></li>
            <li className='social-link instagram'></li>
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default Footer;
