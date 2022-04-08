import { createContext, useReducer } from "react"


export const CartContext = createContext()

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_CART':
      return { ...state, cart: action.payload }
    case 'UPDATE_CART_SIZE':
      return { ...state, cartSize: action.payload }
    case 'UPDATE_CART_TOTAL':
      return { ...state, cartTotal: action.payload }
    default: 
      return state
  }
}

export function CartProvider({ children }) {
  
  const cart = JSON.parse(localStorage.getItem("cart"))
  
  const calcCartSize = (cart) => {
    if(!cart) return false
    return cart.reduce((prev, next) => {
      return prev + parseInt(next.quantity)
    }, 0)
  }

  const setCartSize = (cart) => {
    const cartSize = calcCartSize(cart)
    dispatch({ type: 'UPDATE_CART_SIZE', payload: cartSize})
  }  
  
  // CALCULATE & DISPLAY TOTAL PRICE OF ALL ITEMS IN CART
  const calcCartTotal = (cart) => {
    if(!cart) return false
    const initialValue = 0;
    const total = cart.reduce((prevItem, currentItem) => {
      return prevItem + (currentItem.price * currentItem.quantity)
    }, initialValue)
    return total
  }

  const setCartTotal = (cart) => {
    const cartTotal = calcCartTotal(cart)
    dispatch({ type: 'UPDATE_CART_TOTAL', payload: cartTotal})
  }  

  const initialState = {
    cart: cart || [],
    cartSize: calcCartSize(cart),
    cartTotal: calcCartTotal(cart)
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)

  // SAVE AS STATE AND LOCAL STORAGE
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
    setCartSize(cart)
    setCartTotal(cart)
    dispatch({ type: 'SAVE_CART', payload: cart})
  }

  // RETURNS TRUE IF CART HAS THIS PRODUCT IN IT ALREADY
  const cartHasItem = (cart, product) => {
    if (!cart) return false
    return cart.some(item => {
      return item.name === product.name
    })
  }

  // LOOP THRU CART, FIND MATCHING ITEM, ADD GIVEN QUANTITY
  const updateQuantity = (cart, product, quantity, options) => {
    cart = cart.map(item => {
      if(item.name === product.name) {
        if (options.addOn === true){
          item.quantity = parseInt(item.quantity) + parseInt(quantity)
        } else {
          item.quantity = quantity
        }
        return item
      } else {
        return item
      }
    })
    saveCart(cart)
  }

  // SET ITEM QUANTITY, MARK ITEM AS 'inCart', ADD TO CART, SAVE
  const addToCart = (cart, item, quantity) => {
    if (quantity === 0) return false
    if (cartHasItem(cart, item)) {
      updateQuantity(cart, item, quantity, { addOn: true })
    } else {
      item.quantity = quantity
      item.inCart = true
      cart.push(item)
      saveCart(cart)
    }
  }

  return (
    <CartContext.Provider 
      value={
        {
          ...state, 
          saveCart, 
          addToCart,
          updateQuantity, 
          setCartSize, 
          setCartTotal
        }
      }>
      {children}
    </CartContext.Provider>
  )
}