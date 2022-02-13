// STYLES
import './component-styles/ProductOverview.css'

// HOOKS
import { useMediaSize } from '../hooks/useMediaSize';

// COMPONENTS
import SeeProductButton from './SeeProductButton';
import Shopping from './Shopping';

const ProductOverview = ({ data, params }) => {
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
  const media = useMediaSize()
  const productRoute = `/products/${product.category}/${product.slug}`

  return (
    <div className="product-overview">
      <div className="img-container">
        {params.slug && <img src={require(`../assets/product-${product.slug}/${media}/image-product.jpg`)} alt="" className="detail-img" />}
        {!params.slug && <img className="category-img" src={require(`../assets/product-${product.slug}/${media}/image-category-page-preview.jpg`)} alt="product" />}
      </div>
      <div className="info">
      {product.new && <span className="sup-head">NEW PRODUCT</span>}
      <h1 className={`headline ${product.category}`}>{product.name.toUpperCase()}</h1>
      <p className="sub-head">{product.description}</p>
      <SeeProductButton productRoute={productRoute}/>
      <Shopping price={product.price} />
      </div>
    </div>
  )
};

export default ProductOverview;
