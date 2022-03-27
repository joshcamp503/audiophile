// STYLES
import "./component-styles/OrderConfirmation.css"

// HOOKS
import { useNavigate } from "react-router-dom"
import { useNavbar } from "../hooks/useNavbar"

const OrderConfirmation = () => {
  const navigate = useNavigate()
  const { setShowOrderConf } = useNavbar()

  const handleClick = () => {
    setShowOrderConf(false)
    navigate('/')
  }

  return (
    <div className="order-confirmation">
      <div className="card">

        <div className="checkmark"><span>V</span></div>

        <div className="thanks">
          <h3 className="thanks1">THANK YOU</h3>
          <h3 className="thanks2">FOR VISITING</h3>
        </div>
        <p className="sub-head">This is a mock website. No payment has been taken.  You will not be charged for anything, no products will be shipped to you, and the information you entered has been safely deleted.</p>
        
        <div className="cart-summary-card">
          <div className="top-item">
            {/* IMG */}
            {/* <div className="item-info">
              <h5 className="item-name">{item.shortHand}</h5>
              <p className="item-price">${item.price}</p>
            </div>
            <span className="item-quantity">x{item.quantity}</span> */}
          </div>
          <div className="grand-total-container">
            <h5 className="grand-title">HAVE A NICE DAY!</h5>
            {/* <p className="grand-total">${item.price}</p> */}
          </div>
        </div>

        <button className="home-button" onClick={handleClick}>BACK TO HOME</button>

      </div>
    </div>
  )
}

export default OrderConfirmation