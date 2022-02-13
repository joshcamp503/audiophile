// STYLES
import './component-styles/SplitTeaser.css'

// COMPONENTS
import SeeProductButton from './SeeProductButton';

const SplitTeaser = () => {
  const productRoute = '/products/earphones/yx1-earphones'

  return (
    <div className="split-teaser">
      <div className="earphones-img"></div>
      <div className="card">
        <div className="card-content">
          <h1 className="title">YX1 EARPHONES</h1>
          <SeeProductButton productRoute={productRoute} />
        </div>
      </div>
    </div>
  )
};

export default SplitTeaser