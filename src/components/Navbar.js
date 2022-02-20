// STYLES
import './component-styles/Navbar.css'

// IMAGES
import hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import logo from '../assets/shared/desktop/logo.svg'
import cart from '../assets/shared/desktop/icon-cart.svg'

import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

const Navbar = () => {
  const { showCart, setShowCart } = useCart()

  const handleClose = () => {
    showCart ? setShowCart(false) : setShowCart(true)
  }

  return (
    <nav className="navbar">
      <img src={hamburger} alt="hamburger" className="hamburger" />
      <NavLink to={`/`} className="logo-link"><img src={logo} alt="logo" className="logo" /></NavLink>
      <ul className="navbar-menu">
        <NavLink to={`/`}>HOME</NavLink>
        <NavLink to={`/products/headphones`}>HEADPHONES</NavLink>
        <NavLink to={`/products/speakers`}>SPEAKERS</NavLink>
        <NavLink to={`/products/earphones`}>EARPHONES</NavLink>
      </ul>
      <button className="cart-btn" onClick={handleClose}>
        <img src={cart} alt="cart" className="cart" />
      </button>
      {/* <NavLink to={`/`} className="cart-link"><img src={cart} alt="cart" className="cart" /></NavLink> */}
    </nav>
  )
}

export default Navbar
