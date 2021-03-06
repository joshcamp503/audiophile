// STYLES
import "./component-styles/OrderSummary.css"

// HOOKS
import { useNavbar } from "../hooks/useNavbar"
import { useCart } from "../hooks/useCart"

const OrderSummary = () => {
  const { setShowOrderConf } = useNavbar()
  const { cart, cartTotal } = useCart()

  const checkFormData = (formDate) => {
    console.log('form data function goes here')
  }

  const handleClick = () => {
    checkFormData()
    window.scrollTo(0, 0)
    setShowOrderConf(true)
  }

  return (
    <div className="order-summary">
      <h3 className="cart-title">SUMMARY</h3>
      <div className="cart-contents">
        {cart && cart.map(item => (
          <div className="cart-item" key={item.slug}>
            <div className="img-container">
              <img src={require(`../assets/cart/image-${item.slug}.jpg`)} alt={`${item.slug} preview`}  />
            </div>
            <div className="item-info">
              <h5 className="item-name">{item.shortHand}</h5>
              <p className="item-price">${item.price.toLocaleString()}</p>
            </div>
            <span className="item-quantity">x{item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="total-display">
        <h4 className="total-title">TOTAL:</h4>
        <span className="total-amount">$ {cartTotal && cartTotal.toLocaleString()}</span>
      </div>
      <button className="pay-btn" onClick={handleClick}>
        PAY {cartTotal && <span className="grand-total"> $ {cartTotal.toLocaleString()}</span>}
      </button>
    </div>
  )
}

export default OrderSummary