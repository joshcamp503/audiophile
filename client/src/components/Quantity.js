// STYLES
import "./component-styles/Quantity.css"


// HOOKS
import { useRef } from "react"

const Quantity = ({ quantity }) => {
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

  return (
    <div className="quantity-btn">
      <button className="plus-minus" id="minus"  onClick={decrement}>-</button>
      <input 
        className="quantity-input" 
        id="amount" 
        type="number" 
        ref={inputRef}
        defaultValue={quantity ? quantity : "1"}
        min="1" 
        max="100" 
        onChange={e => setValue(e)}
        required 
      />
      <button className="plus-minus" id="plus"  onClick={increment}>+</button>
    </div>
  )
}

export default Quantity