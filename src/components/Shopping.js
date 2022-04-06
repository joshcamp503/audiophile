// STYLES
import "./component-styles/Shopping.css"

// HOOKS
import { useRef } from "react"
import { useNavbar } from "../hooks/useNavbar"
import Quantity from "./Quantity"


const Shopping = ({ price, product }) => {
  const { setCartSize } = useNavbar()

  const inputRef = useRef()

  const cartHasItem = (cart) => {
    return cart.some(item => {
      return item.name === product.name
    })
  }

  const addItem = (cart) => {
    const item = product
    item.quantity = inputRef.current.value
    item.inCart = true
    cart.push(item)
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const updateItemQuantity = (cart) => {
    const updatedCart = cart.map(item => {
      if(item.name === product.name) {
        item.quantity = parseInt(item.quantity) + parseInt(inputRef.current.value)
        return item
      } else {
        return item
      }
    })
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }


  const handleSubmit = (e) => { 
    e.preventDefault()
    // if there is no cart, create cart and add item
    if(!localStorage.getItem("cart")) {
      const cart = []
      addItem(cart, product)
      setCartSize(cart)
    } 
    // otherwise, pull the cart down
    else {
      const cart = JSON.parse(localStorage.getItem("cart"))
      // if the cart already has this product in it, then update the quantity
      if(cartHasItem(cart)) {
        updateItemQuantity(cart)
        setCartSize(cart)
      } 
      // otherwise, add the item to the cart
      else {
        addItem(cart, product)
        setCartSize(cart)
      }
    }
  }


  return (
    <div className="shopping">
      <p className="price">$ {price.toLocaleString()}</p>
      <div className="add-container">
        <form className="shopping-form" onSubmit={handleSubmit}>
          <Quantity />
          <button className="add-btn">ADD TO CART</button>
        </form>
      </div>    
    </div>
  )
}

export default Shopping