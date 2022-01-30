// STYLES
import './component-styles/ProductDetails.css'

// HOOKS
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

// COMPONENTS
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Features from'./Features';
import InTheBox from './InTheBox';
import Gallery from './Gallery';
import SimilarProducts from './SimilarProducts';
import NavMenu from './NavMenu';
import About from './About';
import Footer from './Footer';

const ProductDetails = () => {
  const { param } = useParams()
  const url = 'http://localhost3000/' + param
  const { error, isPending, data}


  return (
    <div className="product-details">
      <Navbar />
      <Link to="/" style={{textDecoration: 'none', color: 'black', opacity: '50%'}}>Go Back</Link>
      <p className="price"></p>
      <div className="add-container">
        <div className="quantity">QUANTITY: #</div>
        <button className="add-btn">ADD TO CART</button>
      </div>
      <Features />
      <InTheBox />
      <Gallery />
      <SimilarProducts />
      <NavMenu />
      <About />
      <Footer />
    </div>
  )
};

export default ProductDetails;
