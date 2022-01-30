import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />
          {/* <Route path=`/{product.category || product.id}` element={<ProductCategory />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
