// STYLES
import "./component-styles/Checkout.css"

// HOOKS
import { useFetch } from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

// COMPONENTS
import Navbar from "./Navbar"
import Footer from "./Footer"
import OrderSummary from "./OrderSummary"
import { ProgressBar } from 'loading-animations-react';


const Checkout = () => {
  const { data, isPending, error } = useFetch()
  const cart = JSON.parse(localStorage.getItem("cart"))

  // go back button logic
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }

  // Radio button active state logic
  const [active, setActive] = useState(0)
  
  // compare cart to items in database and pull appropriate product
  // data from the database for security
  const confirmCartItems = (cart, data) => {
    // wait for the data
    if(!data) return false
    if(!cart) return false
    // check each item in cart
    const newCart = cart.map(item => {
      // return matching item from database
      const confirmedItem = data.find(element => {
        return element.slug === item.slug
      })
      // add quantity value to item
      confirmedItem.quantity = item.quantity
      return confirmedItem
    })
    return newCart
  }

  const confirmedItems = confirmCartItems(cart, data)

  return (
    <div className="checkout">
      <Navbar />
      {error && <p className="error">{error}</p>}
      {isPending && 
      <ProgressBar 
        className="loading" 
        borderColor="#777777"
        sliderColor="#d87d4a"
        sliderBackground="#cccccc"
      />}
      {data &&  <div className="page">
        <div className="navlink-container">
          <button onClick={handleClick}>Go Back</button>
        </div>
        <div className="content">
          <div className="checkout-container">
            <h1 className="title">CHECKOUT</h1>
            <form className="checkout-form">

              {/* BILLING DETAILS SECTION */}
              <h3 className="sup-head">BILLING DETAILS</h3>
              <div className="billing-details">
                <div className="form-field">
                  <label htmlFor="full-name">Name</label>
                  <input id="full-name" type="text" name="full-name" placeholder="Ann Onymous"/>
                </div>

                <div className="form-field">
                  <label htmlFor="email-address">Email Address</label>
                  <input id="email-address" type="email" name="email-address" placeholder="annonymous@email.com"/>
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" name="phone" placeholder="+1 202-555-0136"/>
                </div>
              </div>

              {/* SHIPPING INFO SECTION */}
              <h3 className="sup-head">SHIPPING INFO</h3>
              <div className="shipping-info">
                <div className="form-field address-field">
                  <label htmlFor="address">Your Address</label>
                  <input id="address" type="text" name="address" placeholder="123 Imaginary Street"/>
                </div>

                <div className="form-field">
                  <label htmlFor="zip">ZIP Code</label>
                  <input id="" type="text" name="" placeholder="10101"/>
                </div>

                <div className="form-field">
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" name="city" placeholder="Mordor"/>
                </div>  

                <div className="form-field">
                  <label htmlFor="country">Country</label>
                  <input id="country" type="text" name="country" placeholder="Middle-Earth"/>
                </div>
              </div>
              
              {/* PAYMENT DETAILS SECTION */}
              <h3 className="sup-head">PAYMENT DETAILS</h3>
              <div className="payment-details">
                <label htmlFor="payment">Payment Method</label>
                <div className={`radio-container e-money-container ${active ? "" : "active"}`}>
                  <input id="e-money" type="radio" name="payment" checked={active===0} onChange={() => setActive(0)} />
                  <label htmlFor="eMoney">e-Money</label>
                </div>

                <div className={`radio-container cod-container ${active ? "active" : ""}`}>
                  <input id="cod" type="radio" name="payment" checked={active===1} onChange={() => setActive(1)} />
                  <label htmlFor="cod">Cash on Delivery</label>
                </div>

                <div className="form-field">
                  <label htmlFor="eMoneyNumber">e-Money Number</label>
                  <input id="e-money-number" type="text" name="e-money-number" placeholder="238521993"/>
                </div>
                
                <div className="form-field">
                  <label htmlFor="eMoneyPin">e-Money PIN</label>
                  <input id="e-money-pin" type="text" name="e-money-pin" placeholder="1234"/>
                </div>
              </div>

            </form>
          </div>
          <OrderSummary cart={confirmedItems}/>
        </div>
      </div>}
      <Footer />
    </div>
  )
}

export default Checkout