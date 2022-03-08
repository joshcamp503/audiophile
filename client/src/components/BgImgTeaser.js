// STYLES
import './component-styles/BgImgTeaser.css'

// COMPONENTS
import SeeProductButton from './SeeProductButton';

const BgImgTeaser = () => {
  const productRoute = '/products/speakers/zx7-speaker'

  return (
    <div className="bg-img-teaser">
      <h1 className="title">ZX7 SPEAKER</h1>
      <SeeProductButton productRoute={productRoute} />
    </div>
  )
};

export default BgImgTeaser