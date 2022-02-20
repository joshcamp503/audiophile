import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import ScrollToTop from "./components/ScrollToTop"
import Home from "./components/Home";
import ProductCategory from "./components/ProductCategory";
import ProductDetails from "./components/ProductDetails";
import CartMenu from "./components/CartMenu";

// HOOKS
import { useCart } from "./hooks/useCart";

function App() {
  const { showCart } = useCart()

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:slug" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      {showCart && <CartMenu />}
    </div>
  );
}

export default App;
