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
import { useCart } from "./hooks/useCart";

function App() {
  const { showCart, showOrderConf } = useCart()

  return (
    <div className="App">
      <BrowserRouter basename="/audiophile">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:slug" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {showCart && <CartMenu />}
        {showOrderConf && <OrderConfirmation />}
      </BrowserRouter>
    </div>
  );
}

export default App;
