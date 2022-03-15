// STYLES
import './component-styles/ProductDetails.css'

// HOOKS
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom';

// COMPONENTS
import Navbar from './Navbar';
import Features from'./Features';
import Includes from './Includes';
import Gallery from './Gallery';
import SimilarProducts from './SimilarProducts';
import NavMenu from './NavMenu';
import About from './About';
import Footer from './Footer';
import ProductOverview from './ProductOverview';

const ProductDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { data, isPending, error } = useFetch()

  const isolateProduct = (data) => {
    if(Array.isArray(data)) {
      const [ item ] = data.filter(item => {
        return item.slug === params.slug
      })
      return item
    } else {
      return data
    }    
  }
  const product = isolateProduct(data)

  return (
    <div className="product-details">
      <Navbar />
      <div className="content">
        <div className="navlink-container">
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading"> Loading...</p>}
        {(data && product) && 
          <div className="async-container">
            <ProductOverview data={data} params={params} />
            <div className="feature-box">
              <Features features={product.features} />
              <Includes includes={product.includes}/>
            </div>
            <Gallery product={product}/>
            <SimilarProducts product={product}/>
          </div>
        } 
        <NavMenu />
        <About />
      </div>
      <Footer />
    </div>
  )
};

export default ProductDetails;
