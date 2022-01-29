// STYLES
import './component-styles/TallTeaser.css'

// IMAGES
// import speaker from '../assets/home/mobile/image-speaker-zx9.png'

const TallTeaser = () => {
  return (
    <div className="tall-teaser">
      <div className="teaser-img"></div>
      <div className="tall-teaser-info">
        <h1 className='title'>
          <span>ZX9</span>
          <span>SPEAKER</span>
        </h1>
        <p className="tagline">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button>SEE PRODUCT</button>
      </div>
    </div>
  )
};

export default TallTeaser