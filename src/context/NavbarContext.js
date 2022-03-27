import { createContext, useReducer } from "react"


export const NavbarContext = createContext()

const NavbarReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_NAVMENU':
      console.log(action.payload)
      return { ...state, showNavMenu: action.payload }
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

export function NavbarProvider({ children }) {

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
    showNavMenu: false,
    showCart: false,
    showOrderConf: false
  }

  const [state, dispatch] = useReducer(NavbarReducer, initialState)

  const setShowNavMenu = (showNavMenu) => {
    dispatch({ type: 'SHOW_NAVMENU', payload: showNavMenu})
  }

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
    <NavbarContext.Provider value={{...state, setShowNavMenu, setShowCart, setShowOrderConf, setCartSize}}>
      {children}
    </NavbarContext.Provider>
  )
}