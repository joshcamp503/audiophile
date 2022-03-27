// STYLES
import './component-styles/Navbar.css'

// IMAGES
import hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import logo from '../assets/shared/desktop/logo.svg'

// COMPONENTS
import { NavLink } from 'react-router-dom'

// HOOKS
import { useMediaSize } from '../hooks/useMediaSize'
import { useNavbar } from '../hooks/useNavbar'

const Navbar = () => {
  const { showNavMenu, setShowNavMenu, showCart, setShowCart, cartSize } = useNavbar()

  const handleClose = () => {
    showCart ? setShowCart(false) : setShowCart(true)
  }

  const handleBurger = () => {
    showNavMenu ? setShowNavMenu(false) : setShowNavMenu(true)
  }

  // useMediaSize automatically hides burger menu when browser changes to desktop width (min 1200px)
  useMediaSize()

  return (
    <nav className="navbar">
      <img src={hamburger} alt="hamburger" className="hamburger" onClick={handleBurger}/>
      <NavLink to={`/`} className="logo-link"><img src={logo} alt="logo" className="logo" /></NavLink>
      <ul className="navbar-menu">
        <NavLink to={`/`}>HOME</NavLink>
        <NavLink to={`/products/headphones`}>HEADPHONES</NavLink>
        <NavLink to={`/products/speakers`}>SPEAKERS</NavLink>
        <NavLink to={`/products/earphones`}>EARPHONES</NavLink>
      </ul>
      <button className="cart-btn" onClick={handleClose}>
        <div className="cart"></div>
        {cartSize && `(${cartSize})`}
      </button>
    </nav>
  )
}

export default Navbar
