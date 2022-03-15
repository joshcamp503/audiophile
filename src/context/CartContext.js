import { createContext, useReducer } from "react"


export const CartContext = createContext()

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_CART':
      return { ...state, showCart: action.payload }
    case 'UPDATE_CART_SIZE':
      return { ...state, cartSize: action.payload }
    case 'SHOW_ORDER_CONF':
      return { ...state, showOrderConf: action.payload }
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
  const initialCartSize = calcCartSize(cart)

  const initialState = {
    cartSize: initialCartSize,
    showCart: false,
    showOrderConf: false
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)

  const setShowCart = (showCart) => {
    dispatch({ type: 'SHOW_CART', payload: showCart})
  }

  const setShowOrderConf = (showOrderConf) => {
    dispatch({ type: 'SHOW_ORDER_CONF', payload: showOrderConf})
  }

  const setCartSize = (cart) => {
    const cartSize = calcCartSize(cart)
    dispatch({ type: 'UPDATE_CART_SIZE', payload: cartSize})
  }

  return (
    <CartContext.Provider value={{...state, setShowCart, setShowOrderConf, setCartSize}}>
      {children}
    </CartContext.Provider>
  )
}