// STYLES
import './component-styles/Navbar.css'

// IMAGES
import hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import logo from '../assets/shared/desktop/logo.svg'
import cart from '../assets/shared/desktop/icon-cart.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={hamburger} alt="hamburger" className="hamburger" />
      <img src={logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>
      <img src={cart} alt="cart" className="cart" />
    </nav>
  )
}

export default Navbar
