import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import ScrollToTop from "./components/ScrollToTop"
import Home from "./components/Home";
import ProductCategory from "./components/ProductCategory";
import ProductDetails from "./components/ProductDetails";
import CartMenu from "./components/CartMenu";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";

// HOOKS
import { useNavbar } from "./hooks/useNavbar";
import NavMenu from "./components/NavMenu";

function App() {
  const { setShowNavMenu, showNavMenu, showCart, showOrderConf } = useNavbar()

  const closeNav = (e) => {
    if(e.target.classList.contains('nav')) return false
    setShowNavMenu(false)
  }

  return (
    <div className="App" onClick={closeNav}>
      <BrowserRouter basename="/audiophile">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:slug" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {showNavMenu && <div className="nav showNavMenu"><NavMenu closeNav={closeNav} /></div>}
        {showCart && <CartMenu />}
        {showOrderConf && <OrderConfirmation />}
      </BrowserRouter>
    </div>
  );
}

export default App;
