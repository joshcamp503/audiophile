// STYLES
import './component-styles/SplitTeaser.css'

// IMAGES
// import earphones from '../assets/home/mobile/image-earphones-yx1.jpg'

const SplitTeaser = () => {
  return (
    <div className="split-teaser">
      {/* <img className="earphones-img" src={earphones} alt="earphones image" /> */}
      <div className="earphones-img"></div>
      <div className="card">
        <div className="card-content">
          <h1 className="title">YX1 EARPHONES</h1>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  )
};

export default SplitTeaser