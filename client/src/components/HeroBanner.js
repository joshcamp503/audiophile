// STYLES 
import './component-styles/HeroBanner.css'

// COMPONENTS
import SeeProductButton from './SeeProductButton';

const HeroBanner = () => {
  const productRoute = '/products/headphones/xx99-mark-two-headphones'
  return (
    <div className="hero-banner">
      <div className="advert">
        <span className="sup-head">NEW PRODUCT</span>
        <h1 className="headline">XX99 MARK II HEADPHONES</h1>
        <p className="sub-head">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <SeeProductButton productRoute={productRoute}/>
      </div>
    </div>
  )
};

export default HeroBanner;
