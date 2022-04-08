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
import { useCart } from '../hooks/useCart'

const Navbar = () => {
  const { cartSize } = useCart()
  const { showNavMenu, setShowNavMenu, showCart, setShowCart } = useNavbar()

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true)
  }

  const closeCart = () => {
    setShowCart(false)
  }

  const handleBurger = () => {
    closeCart()
    showNavMenu ? setShowNavMenu(false) : setShowNavMenu(true)
  }

  // useMediaSize automatically hides burger menu when browser changes to desktop width (min 1200px)
  useMediaSize()

  return (
    <nav className="nav navbar">
      <img src={hamburger} alt="hamburger" className="nav hamburger" onClick={handleBurger}/>
      <NavLink to={`/`} className="logo-link"  onClick={closeCart} ><img src={logo} alt="logo" className="nav logo"/></NavLink>
      <ul className="nav navbar-menu" onClick={closeCart} >
        <NavLink to={`/`}>HOME</NavLink>
        <NavLink to={`/products/headphones`}>HEADPHONES</NavLink>
        <NavLink to={`/products/speakers`}>SPEAKERS</NavLink>
        <NavLink to={`/products/earphones`}>EARPHONES</NavLink>
      </ul>
      <button className="cart-btn" onClick={toggleCart}>
        <div className="cart"></div>
        {(cartSize > 0) && `(${cartSize})`}
      </button>
    </nav>
  )
}

export default Navbar
