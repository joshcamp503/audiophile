// STYLES
import "./component-styles/Shopping.css"

// COMPONENTS
import Quantity from "./Quantity"

// HOOKS
import { useRef } from "react"
import { useCart } from "../hooks/useCart"


const Shopping = ({ price, product }) => {
  const { cart, addToCart } = useCart()
  const formRef = useRef(null)

  const handleSubmit = (e) => { 
    e.preventDefault()
    const quantity = formRef.current.querySelector('input').value
    formRef.current.querySelector('input').value = 1
    addToCart(cart, product, quantity)
  }

  return (
    <div className="shopping">
      <p className="price">$ {price.toLocaleString()}</p>
      <div className="add-container">
        <form className="shopping-form" ref={formRef} onSubmit={handleSubmit}>
          <Quantity />
          <button className="add-btn">ADD TO CART</button>
        </form>
      </div>    
    </div>
  )
}

export default Shopping