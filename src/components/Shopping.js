// STYLES
import "./component-styles/Shopping.css"


const Shopping = ({ price }) => {
  return (
    <div className="shopping">
      <p className="price">$ {price.toLocaleString()}</p>
      <div className="add-container">
        <div className="add-to-cart">
          <button className="quantity-btn">
            <span className="plus-minus">-</span>
            <span className="quantity">0</span>
            <span className="plus-minus">+</span>
          </button>
          <button className="add-btn">ADD TO CART</button>
        </div>
      </div>    
    </div>
  )
}

export default Shopping