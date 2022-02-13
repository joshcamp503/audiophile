import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import ScrollToTop from "./components/ScrollToTop"
import Home from "./components/Home";
import ProductCategory from "./components/ProductCategory";
import ProductDetails from "./components/ProductDetails";

function App() {

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
    </div>
  );
}

export default App;
