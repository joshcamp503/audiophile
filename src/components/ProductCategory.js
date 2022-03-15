// STYLES
import './component-styles/ProductCategory.css'

// HOOKS
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

// COMPONENTS
import Navbar from './Navbar';
import NavMenu from './NavMenu';
import About from './About';
import Footer from './Footer';
import ProductOverview from './ProductOverview';

const ProductCategory = () => {
  const params = useParams()
  const { data, isPending, error } = useFetch()
  

  return (
    <div className="product-category">
      <Navbar />
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading"> Loading...</p>}
      {data && <div className="header">{data[0].category.toUpperCase()}</div>}
      {data && data
        .sort((a, b) => (a.new < b.new) ? 1 : -1)
        .map(product => (
          <ProductOverview data={product} params={params} key={product.slug}/>
        ))}
      <NavMenu />
      <About />
      <Footer />
    </div>
  )
};

export default ProductCategory;
