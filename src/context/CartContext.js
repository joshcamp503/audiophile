import { createContext, useReducer } from "react"


export const CartContext = createContext()

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_CART':
      return { ...state, showCart: action.payload }
    default: 
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, { showCart: false })

  const setShowCart = (showCart) => {
    dispatch({ type: 'SHOW_CART', payload: showCart})
  }

  return (
    <CartContext.Provider value={{...state, setShowCart}}>
      {children}
    </CartContext.Provider>
  )
}