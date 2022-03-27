// STYLES
import './component-styles/TallTeaser.css'
import SeeProductButton from './SeeProductButton';

const TallTeaser = () => {
  const productRoute = '/products/speakers/zx9-speaker'
  return (
    <div className="tall-teaser">
      <div className="teaser-img"></div>
      <div className="tall-teaser-info">
        <h1 className='title'>
          <span>ZX9</span>
          <span>SPEAKER</span>
        </h1>
        <p className="tagline">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <SeeProductButton productRoute={productRoute} />
      </div>
    </div>
  )
};

export default TallTeaser