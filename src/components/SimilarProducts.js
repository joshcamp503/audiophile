// STYLES
import './component-styles/SimilarProducts.css'

// HOOKS
import { useMediaSize } from '../hooks/useMediaSize';

// COMPONENTS
import SeeProductButton from './SeeProductButton';

const SimilarProducts = ({ product }) => {

  const media = useMediaSize();
  
  return (
    <div className="similar-products">
      <div className="similar-products-header">
        <h1 className="header-title">YOU MAY ALSO LIKE</h1>
      </div>
      <div className="cards-container">
        {product.others.map((other, index) => (
          <div className={`card card${index + 1}`} key={other.slug}>
            <img src={require(`../assets/shared/${media}/image-${other.slug}.jpg`)} alt={other.name} className="card-img" />
            <h1 className="card-title">{other.name}</h1>
            <SeeProductButton productRoute={`/products/${other.category}/${other.slug}`} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default SimilarProducts;



