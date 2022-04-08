// STYLES
import './component-styles/CartMenu.css'

// COMPONENTS
import Quantity from './Quantity'

// HOOKS
import { useNavigate } from 'react-router-dom'
import { useNavbar } from '../hooks/useNavbar'
import { useCart } from '../hooks/useCart'
import { useRef } from 'react'

const CartMenu = () => {
  const { cart, saveCart, updateQuantity, cartTotal } = useCart()

  // NAVIGATE ON CHECKOUT
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/checkout')
  }

  // CLOSE MENU WITH 'X' BUTTON OR BY CLICKING CHECKOUT
  const { showCart, setShowCart } = useNavbar()
  const handleClose = () => {
    showCart ? setShowCart(false) : setShowCart(true)
  }

  // CLOSE MENU IF USER CLICKS OUTSIDE OF IT
  const closeCart = (e) => {
    if(!e.target.classList.contains('cart-menu-backdrop')) return false
    setShowCart(false)
  }

  // // REMOVE EVERYTHING FROM SHOPPING CART & UPDATE CONTEXT
  const clearCart = () => {
    localStorage.removeItem("cart")
    saveCart([])
  }
  
  const formRef = useRef(null)

  const handleSubmit = (e) => { 
    // GATHER ALL THE QUANTITY INPUTS INTO A NODELIST AND THEN ITERATE
    const inputList = formRef.current.querySelectorAll('input')

    // SET UP EMPTY ARRAY TO PUSH QUANTITY VALUES TO
    const newQuantities = []

    // LOOP THROUGH NODELIST AND PUSH VALUE OF EACH INPUT TO ARRAY
    for (const value of inputList.values()) {
      newQuantities.push(value.value)
    }
    console.log(cart)
    console.log('fired')
    
    cart.forEach((item, index) => {
      updateQuantity(cart, item, newQuantities[index], { addOn: false })
    })
    // saveCart(cart)
  }

  return (
    <div className="cart-menu-backdrop" onClick={closeCart}>
      <div className="cart-menu">
        <button className="close-btn" onClick={handleClose}>x</button>

        <div className="cart-header">
          <h3 className="cart-title">CART
            {cart && <span> ({cart.length})</span>}
          </h3>
          <button className="remove-all" onClick={clearCart}>Remove all</button>
        </div>

        <div className="cart-contents">
          <form ref={formRef}>
            {cart && cart.map(item => (
              <div className="cart-item" key={item.slug}>
                <div className="img-container">
                  <img src={require(`../assets/cart/image-${item.slug}.jpg`)} alt={`{product.slug} preview`}  />
                </div>
                <div className="item-info">
                  <h5 className="item-name">{item.shortHand}</h5>
                  <p className="item-price">${item.price.toLocaleString()}</p>
                </div>
                <Quantity product={item} quantity={item.quantity} />
              </div>
            ))}
          </form>
        </div>

        <div className="total-display">
          <h4 className="total-title">TOTAL:</h4>
          <span className="total-amount">$ {cartTotal && cartTotal.toLocaleString()}</span>
        </div>

        <button 
          className="checkout-btn" 
          onClick={() => {
            handleSubmit()
            handleClose()
            handleClick()
            }}>
          {/* BUTTON TEXT */}
          CHECKOUT
        </button>
      </div>

    </div>
  )
}

export default CartMenu