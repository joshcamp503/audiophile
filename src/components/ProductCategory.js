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
import { ProgressBar } from 'loading-animations-react';

const ProductCategory = () => {
  const params = useParams()
  const { data, isPending, error } = useFetch()
  

  return (
    <div className="product-category">
      <Navbar />
      {data && <div className="header">{data[0].category.toUpperCase()}</div>}
        {error && <p className="error">{error}</p>}
      {isPending && 
      <ProgressBar 
        className="loading" 
        borderColor="#777777"
        sliderColor="#d87d4a"
        sliderBackground="#cccccc"
      />}
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
