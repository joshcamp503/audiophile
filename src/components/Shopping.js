// STYLES
import "./component-styles/Shopping.css"

// HOOKS
import { useRef } from "react"
import { useCart } from "../hooks/useCart"


const Shopping = ({ price, product }) => {
  const { setCartSize } = useCart()

  const inputRef = useRef()

  const setValue = (e) => {
    inputRef.current.value = e.target.value
  }

  const increment = (e) => {
    e.preventDefault()
    if(inputRef.current.value >= 99) return false
    inputRef.current.value++
  }

  const decrement = (e) => {
    e.preventDefault()
    if(inputRef.current.value <= 1) return false
    inputRef.current.value--
  }

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
          <div className="quantity-btn">
            <button className="plus-minus" id="minus"  onClick={decrement}>-</button>
            <input 
              className="quantity-input" 
              id="amount" 
              type="number" 
              ref={inputRef}
              defaultValue="1"
              min="1" 
              max="100" 
              onChange={e => setValue(e)}
              required 
            />
            <button className="plus-minus" id="plus"  onClick={increment}>+</button>
          </div>
          <button className="add-btn">ADD TO CART</button>
        </form>
      </div>    
    </div>
  )
}

export default Shopping